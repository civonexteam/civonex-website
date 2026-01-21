import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-semibold">Civonex</h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Civonex is a student-driven initiative focused on education,
              civic awareness, and practical understanding — developed
              in collaboration with educators and institutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/students" className="hover:text-white transition">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="hover:text-white transition">
                  Institutions
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-white transition">
                  Civic Sense
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide">
              Our Vision
            </h4>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              To help students grow beyond exams, build civic responsibility,
              and understand real-world systems with guidance from educators
              and institutions.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Civonex. All rights reserved.</p>
          <p>Educate. Empower. Engage.</p>
        </div>

      </div>
    </footer>
  );
}
