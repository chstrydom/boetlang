"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-600">
        BoetLang 🇿🇦
      </Link>
      <div className="flex space-x-4">
        <Link href="/word-of-the-day" className="hover:underline">
          Word of the Day
        </Link>
        <Link href="/how-we-actually-say-it" className="hover:underline">
          How We Actually Say It...
        </Link>
        <Link href="/jou-ma-se-metaphors" className="hover:underline">
          Jou Ma se Metaphors!
        </Link>
        <Link href="/cultural-context" className="hover:underline">
          Cultural Context
        </Link>
        <Link href="/learn" className="hover:underline">
          Learn Some Afrikaans
        </Link>
        <Link href="/about" className="hover:underline">
          About Us
        </Link>
      </div>
    </nav>
  );
}
