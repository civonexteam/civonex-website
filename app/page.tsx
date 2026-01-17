import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-4xl font-bold text-blue-900">
          Civonex
        </h1>

        <p className="mt-4 text-xl text-gray-700">
          Educate. Empower. Engage.
        </p>

        <p className="mt-6 max-w-xl text-center text-gray-600">
          Civonex is a digital-first platform focused on education,
          civic awareness, and empowering institutions through technology.
        </p>
      </main>
    </>
  );
}
