import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-24 space-y-24">

      {/* HERO SECTION */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Building an Educated, Aware & Empowered Generation
        </h1>

        <p className="text-lg text-gray-600">
          Civonex is a digital-first platform focused on civic awareness,
          education, and empowering institutions through technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link
            href="/students"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            For Students
          </Link>

          <Link
            href="/institutions"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            For Institutions
          </Link>
        </div>
      </section>

      {/* WHAT IS CIVONEX */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-3xl font-semibold">
          What is Civonex?
        </h2>

        <p className="text-gray-600 text-lg">
          Civonex is a modern civic and education platform built for today’s
          digital generation. We help students become responsible citizens,
          institutions modernize digitally, and society grow through awareness.
        </p>
      </section>

      {/* WHO IT IS FOR */}
      <section className="max-w-6xl grid md:grid-cols-3 gap-8">

        {/* Students */}
        <div className="border rounded-xl p-6 space-y-4 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🎓 Students</h3>
          <p className="text-gray-600">
            Learn real-world civic sense, digital awareness, and grow as a
            responsible individual beyond textbooks.
          </p>
          <Link
            href="/students"
            className="text-blue-600 font-medium hover:underline"
          >
            Explore for Students →
          </Link>
        </div>

        {/* Institutions */}
        <div className="border rounded-xl p-6 space-y-4 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🏫 Institutions</h3>
          <p className="text-gray-600">
            Build a strong digital presence, engage students effectively, and
            promote awareness using technology.
          </p>
          <Link
            href="/institutions"
            className="text-blue-600 font-medium hover:underline"
          >
            Explore for Institutions →
          </Link>
        </div>

        {/* Society */}
        <div className="border rounded-xl p-6 space-y-4 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🌍 Society</h3>
          <p className="text-gray-600">
            Strengthen civic responsibility, digital literacy, and community
            awareness for a smarter future.
          </p>
          <Link
            href="/learn"
            className="text-blue-600 font-medium hover:underline"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* VISION */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p className="text-gray-600 text-lg">
          To create a digitally aware, educated, and responsible generation
          that strengthens institutions and society.
        </p>
      </section>

    </main>
  );
}
