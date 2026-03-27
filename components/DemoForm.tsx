"use client";

import React from "react";

export default function DemoForm() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  const [formData, setFormData] = React.useState({
    nome: "",
    cognome: "",
    email: "",
    organizzazione: "",
    indirizzo: "",
    citta: "",
    cap: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.cognome || !formData.email) {
      alert("Compila tutti i campi obbligatori.");
      return;
    }

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(data?.error || "Errore durante l'invio.");
        return;
      }

      alert("✅ Richiesta inviata!");
      setShowDemoForm(false);

      setFormData({
        nome: "",
        cognome: "",
        email: "",
        organizzazione: "",
        indirizzo: "",
        citta: "",
        cap: "",
        telefono: "",
      });

    } catch {
      alert("Errore di rete.");
    }
  };

  return (
    <>
      <button
  onClick={() => setShowDemoForm(true)}
  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
>
  Richiedi una demo gratuita
</button>

      {showDemoForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-xl relative">
            <button
              onClick={() => setShowDemoForm(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Richiedi una Demo Gratuita
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="nome"
                placeholder="Nome *"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <input
                name="cognome"
                placeholder="Cognome *"
                required
                value={formData.cognome}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <input
  name="email"
  type="email"
  placeholder="Email *"
  value={formData.email}
  onChange={handleChange}
  className="w-full border rounded-lg p-3"
  required
/>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl"
              >
                Invia richiesta
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}