export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building a Smarter, More Aware Digital Society
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Civonex empowers students, citizens, and institutions through
          education, civic awareness, and technology-driven initiatives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/students"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            For Students
          </a>
          <a
            href="/institutions"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            For Institutions
          </a>
          <a
            href="/civic-sense"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Learn Civic Sense
          </a>
        </div>
      </section>

      {/* WHAT IS CIVONEX */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">What is Civonex?</h2>
          <p className="text-lg text-gray-600">
            Civonex is a digital-first initiative designed to educate,
            empower, and engage people. We focus on strengthening education,
            improving civic sense, and helping institutions adapt to the
            digital era.
          </p>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Who is Civonex for?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Students</h3>
              <p className="text-gray-600">
                Learn beyond textbooks, build civic responsibility, and gain
                practical digital knowledge for real life.
              </p>
            </div>

            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Institutions</h3>
              <p className="text-gray-600">
                Improve digital presence, student engagement, and run meaningful
                awareness & education initiatives.
              </p>
            </div>

            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Citizens</h3>
              <p className="text-gray-600">
                Understand rights and duties, improve civic sense, and
                contribute to a responsible society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CIVONEX */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Civonex?</h2>
          <ul className="text-lg text-gray-600 space-y-3">
            <li>✔ Education with purpose</li>
            <li>✔ Civic awareness for real life</li>
            <li>✔ Technology for social good</li>
            <li>✔ Built by the next generation, for the next generation</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>Civonex © 2026</p>
        <p>Educate. Empower. Engage.</p>
      </footer>
    </main>
  );
}
