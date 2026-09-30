"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
export default function WhatsAppConnectPage() {
  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
  sdkReady,
  setSdkReady,
] = useState(false);

const [
  whatsappBusinessAccountId,
  setWhatsAppBusinessAccountId,
] = useState<string | null>(null);

const [
  phoneNumberId,
  setPhoneNumberId,
] = useState<string | null>(null);

useEffect(() => {
  const handleMessage = (
    event: MessageEvent
  ) => {
    if (
      event.origin !==
      "https://www.facebook.com"
    ) {
      return;
    }

    let data = event.data;

    try {
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
    } catch {
      return;
    }

    if (
      data?.type !==
      "WA_EMBEDDED_SIGNUP"
    ) {
      return;
    }

    if (
      data?.event === "FINISH"
    ) {
      const wabaId =
        data?.data
          ?.waba_id ?? null;

      const phoneId =
        data?.data
          ?.phone_number_id ?? null;

      setWhatsAppBusinessAccountId(
        wabaId
      );

      setPhoneNumberId(
        phoneId
      );
    }
  };

  window.addEventListener(
    "message",
    handleMessage
  );

  return () => {
    window.removeEventListener(
      "message",
      handleMessage
    );
  };
}, []);

useEffect(() => {
  const win = window as any;

  win.fbAsyncInit = () => {
    win.FB.init({
      appId: "1405121921742811",
      cookie: true,
      xfbml: false,
      version: "v24.0",
    });

    setSdkReady(true);
  };

  /*
   * Caso in cui lo script fosse
   * già stato caricato.
   */
  if (win.FB) {
    win.fbAsyncInit();
  }

  return () => {
    delete win.fbAsyncInit;
  };
}, []);

const fbLoginCallback = (
  response: any
) => {
  if (
    !response?.authResponse?.code
  ) {
    setLoading(false);
    return;
  }

  const code =
    response.authResponse.code;

  /*
   * Il code NON va scambiato
   * direttamente dal browser.
   *
   * Nel prossimo passaggio invieremo
   * al backend MaconClub:
   *
   * - code
   * - whatsappBusinessAccountId
   * - phoneNumberId
   */
};

const launchWhatsAppSignup = () => {
  const win = window as any;

  if (
    !sdkReady ||
    !win.FB
  ) {
    return;
  }

  setLoading(true);

  win.FB.login(
    fbLoginCallback,
    {
      config_id:
        "1805488817120986",

      response_type:
        "code",

      override_default_response_type:
        true,

      extras: {
  version: "v4",
  featureType:
    "whatsapp_business_app_onboarding",
      },
    }
  );
};

 return (
  <>
    <Script
  id="facebook-jssdk"
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="afterInteractive"
  onLoad={() => {
    const win = window as any;

    if (!win.FB) {
      return;
    }

    win.FB.init({
      appId: "1405121921742811",
      cookie: true,
      xfbml: false,
      version: "v24.0",
    });

    setSdkReady(true);
  }}
/>

    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#f8fafc",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          backgroundColor: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: 20,
          padding: 28,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            color: "#0f172a",
          }}
        >
          Collega WhatsApp Business
        </h1>

        <p
          style={{
            marginTop: 12,
            marginBottom: 24,
            color: "#64748b",
            lineHeight: 1.6,
          }}
        >
          Collega l&apos;account WhatsApp Business
          della tua società a MaconClub.
        </p>

        <button
          type="button"
          disabled={loading || !sdkReady}
          onClick={launchWhatsAppSignup}
          style={{
            width: "100%",
            minHeight: 50,
            border: 0,
            borderRadius: 12,
            backgroundColor: "#16a34a",
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 700,
            cursor: loading
              ? "default"
              : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
         {loading
  ? "Apertura..."
  : !sdkReady
    ? "Caricamento Meta..."
    : "Collega WhatsApp Business"}
        </button>
      </div>
            </main>
  </>
);
}