"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Students", href: "/students" },
  { name: "Institutions", href: "/institutions" },
  { name: "Civic Sense", href: "/learn" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Civonex
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition
                  ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 transition-transform duration-300
                  ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  style={{ transformOrigin: "left" }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:flex items-center">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg border border-blue-600
                       text-blue-600 text-sm font-medium
                       hover:bg-blue-50 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Login */}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-2 rounded-lg
                         border border-blue-600 text-blue-600
                         text-sm font-medium"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
