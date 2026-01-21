"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Civonex
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/students" className={linkClass("/students")}>Students</Link>
          <Link href="/institutions" className={linkClass("/institutions")}>Institutions</Link>
          <Link href="/civic-sense" className={linkClass("/civic-sense")}>Civic Sense</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}