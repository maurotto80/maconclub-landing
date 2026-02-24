import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nome,
      cognome,
      email,
      organizzazione,
      indirizzo,
      citta,
      cap,
      telefono,
    } = body;

    if (!nome || !cognome || !email) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Demo MaconClub <demo@maconclub.com>",
      to: "info@maconclub.com",
      subject: "Nuova richiesta Demo MaconClub",
      html: `
        <h2>Nuova richiesta demo</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cognome:</strong> ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organizzazione:</strong> ${organizzazione || "-"}</p>
        <p><strong>Indirizzo:</strong> ${indirizzo || "-"}</p>
        <p><strong>Città:</strong> ${citta || "-"}</p>
        <p><strong>CAP:</strong> ${cap || "-"}</p>
        <p><strong>Telefono:</strong> ${telefono || "-"}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Errore invio email" },
      { status: 500 }
    );
  }
}