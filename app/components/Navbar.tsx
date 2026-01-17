import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-900">Civonex</h1>

      <div className="flex gap-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/students">Students</Link>
        <Link href="/institutions">Institutions</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
