export default function DataDeletionPage() {
  return (
    <main className="bg-white text-gray-900 pt-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">
          Cancellazione dei dati – MaconClub
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Ultimo aggiornamento: 29/09/2026
        </p>

        <section className="space-y-6">
          <p>
            Gli utenti di MaconClub possono richiedere la
            cancellazione dei propri dati personali e delle
            informazioni associate al proprio account,
            nei casi previsti dalla normativa applicabile.
          </p>

          <h2 className="text-xl font-semibold">
            Come richiedere la cancellazione
          </h2>

          <p>
            Per richiedere la cancellazione dei dati è
            possibile inviare una richiesta tramite email
            all&apos;indirizzo{" "}
            <a
              href="mailto:info@maconclub.com"
              className="underline text-blue-600"
            >
              info@maconclub.com
            </a>
            .
          </p>

          <p>
            Nell&apos;email è necessario indicare
            l&apos;indirizzo email utilizzato per accedere
            a MaconClub e, se applicabile, il nome
            dell&apos;organizzazione sportiva alla quale
            l&apos;account è associato.
          </p>

          <h2 className="text-xl font-semibold">
            Gestione della richiesta
          </h2>

          <p>
            Dopo aver ricevuto la richiesta, potranno essere
            effettuate le verifiche necessarie per identificare
            correttamente l&apos;account interessato e
            prevenire richieste di cancellazione non
            autorizzate.
          </p>

          <p>
            Quando i dati sono gestiti nell&apos;ambito del
            rapporto con un&apos;associazione, società o
            organizzazione sportiva, la richiesta potrà essere
            gestita tenendo conto del ruolo
            dell&apos;organizzazione interessata.
          </p>

          <h2 className="text-xl font-semibold">
            Dati interessati dalla cancellazione
          </h2>

          <p>
            La richiesta può riguardare i dati personali
            associati all&apos;account e le altre informazioni
            personali trattate attraverso MaconClub, nei limiti
            in cui la loro cancellazione sia consentita.
          </p>

          <p>
            Alcune informazioni potranno essere conservate
            quando ciò sia necessario per adempiere a obblighi
            di legge, tutelare diritti o documentare operazioni
            che devono essere conservate secondo la normativa
            applicabile.
          </p>

          <h2 className="text-xl font-semibold">
            WhatsApp
          </h2>

          <p>
            Se l&apos;utente ha attivato le comunicazioni
            WhatsApp attraverso MaconClub, la richiesta può
            riguardare anche il numero di telefono e le
            informazioni associate al consenso alle
            comunicazioni WhatsApp, nei limiti previsti dalla
            normativa applicabile.
          </p>

          <p>
            Il consenso alle comunicazioni WhatsApp può inoltre
            essere revocato attraverso le funzionalità
            disponibili in MaconClub.
          </p>

          <h2 className="text-xl font-semibold">
            Ulteriori informazioni
          </h2>

          <p>
            Per maggiori informazioni sul trattamento dei dati
            personali consulta la{" "}
            <a
              href="/privacy"
              className="underline text-blue-600"
            >
              Privacy Policy
            </a>
            .
          </p>

          <p>
            Per qualsiasi richiesta relativa alla protezione
            dei dati personali puoi contattarci all&apos;indirizzo{" "}
            <a
              href="mailto:info@maconclub.com"
              className="underline text-blue-600"
            >
              info@maconclub.com
            </a>
            .
          </p>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center mt-16">
        <p className="font-semibold">
          MaconClub © {new Date().getFullYear()}
        </p>

        <p className="mt-2">
          Contatti:{" "}
          <a
            className="underline"
            href="mailto:info@maconclub.com"
          >
            info@maconclub.com
          </a>
        </p>

        <div className="mt-2 flex justify-center gap-4">
          <a
            href="/privacy"
            className="underline text-gray-300 hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="underline text-gray-300 hover:text-white"
          >
            Termini e Condizioni
          </a>
        </div>
      </footer>
    </main>
  );
}