"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="MaconClub" className="w-10 h-10" />
          <span className="font-bold text-xl text-gray-900">
            MaconClub
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link
            href="/gestionale-societa-sportiva"
            className="hover:text-blue-600"
          >
            Gestionale Società Sportiva
          </Link>

          <Link
            href="/software-gestionale-asd"
            className="hover:text-blue-600"
          >
            Software Gestionale ASD
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link
              href="/gestionale-societa-sportiva"
              onClick={() => setOpen(false)}
            >
              Gestionale Società Sportiva
            </Link>

            <Link
              href="/software-gestionale-asd"
              onClick={() => setOpen(false)}
            >
              Software Gestionale ASD
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}