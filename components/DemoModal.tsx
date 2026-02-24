"use client";

import React from "react";

export default function DemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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

  if (!open) return null;

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

      if (!res.ok) {
        alert("Errore durante l'invio.");
        return;
      }

      alert("✅ Richiesta inviata! Ti contatteremo a breve.");
      onClose();
    } catch {
      alert("Errore di rete.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-5 sm:p-8 w-full max-w-xl relative max-h-[85vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Richiedi una Demo Gratuita
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="nome" placeholder="Nome *" onChange={handleChange} className="w-full border rounded-lg p-3" required />
          <input name="cognome" placeholder="Cognome *" onChange={handleChange} className="w-full border rounded-lg p-3" required />
          <input name="email" type="email" placeholder="Email *" onChange={handleChange} className="w-full border rounded-lg p-3" required />
          <input name="organizzazione" placeholder="Nome Organizzazione ASD" onChange={handleChange} className="w-full border rounded-lg p-3" />
          <input name="indirizzo" placeholder="Indirizzo sede" onChange={handleChange} className="w-full border rounded-lg p-3" />

          <div className="grid grid-cols-2 gap-4">
            <input name="citta" placeholder="Città" onChange={handleChange} className="border rounded-lg p-3" />
            <input name="cap" placeholder="CAP" onChange={handleChange} className="border rounded-lg p-3" />
          </div>

          <input name="telefono" placeholder="Telefono" onChange={handleChange} className="w-full border rounded-lg p-3" />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl"
          >
            Invia richiesta
          </button>
        </form>

      </div>
    </div>
  );
}