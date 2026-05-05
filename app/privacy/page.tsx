export default function PrivacyPage() {
  return (
    <main className="bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy – MaconClub
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Ultimo aggiornamento: 05/05/2026
        </p>

        <section className="space-y-6">

          <p>
            MaconClub si impegna a proteggere la privacy degli utenti.
            Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo i dati personali.
          </p>

          <h2 className="text-xl font-semibold">1. Titolare del trattamento</h2>
          <p>
            MaconClub<br />
            Email: info@maconclub.com
          </p>

          <h2 className="text-xl font-semibold">2. Dati raccolti</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dati anagrafici (nome, email)</li>
            <li>Credenziali di accesso (password criptata)</li>
            <li>Dati organizzativi (società sportiva, ruoli)</li>
            <li>Dati relativi agli atleti</li>
            <li>Dati dei genitori associati</li>
            <li>Token per notifiche push</li>
            <li>Dati di utilizzo della piattaforma</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Finalità del trattamento</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gestione della piattaforma</li>
            <li>Organizzazione attività sportive</li>
            <li>Invio notifiche e comunicazioni</li>
            <li>Gestione pagamenti e ricevute</li>
            <li>Miglioramento del servizio</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Condivisione dei dati</h2>
          <p>
            I dati non vengono venduti. Possono essere condivisi con servizi tecnici
            necessari al funzionamento (hosting, email, notifiche).
          </p>

          <h2 className="text-xl font-semibold">5. Sicurezza</h2>
          <p>
            Utilizziamo protocolli sicuri (HTTPS), autenticazione con token (JWT)
            e protezione degli accessi.
          </p>

          <h2 className="text-xl font-semibold">6. Conservazione dei dati</h2>
          <p>
            I dati vengono conservati per il tempo necessario al servizio o per obblighi di legge.
          </p>

          <h2 className="text-xl font-semibold">7. Diritti dell’utente</h2>
          <p>
            È possibile richiedere accesso, modifica o cancellazione dei dati scrivendo a info@maconclub.com
          </p>

          <h2 className="text-xl font-semibold">8. Minori</h2>
          <p>
            I dati dei minori sono gestiti esclusivamente tramite organizzazioni sportive
            sotto responsabilità dei genitori o tutori.
          </p>

          <h2 className="text-xl font-semibold">9. Modifiche</h2>
          <p>
            La presente informativa può essere aggiornata nel tempo.
          </p>

        </section>
      </div>
    </main>
  );
}