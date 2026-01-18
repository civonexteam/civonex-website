export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building Smarter Students, <br className="hidden md:block" />
            Stronger Institutions, and <br className="hidden md:block" />
            Responsible Citizens
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Civonex is a digital-first platform focused on education, civic awareness,
            and empowering institutions using technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/students"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Explore for Students
            </a>

            <a
              href="/institutions"
              className="border border-gray-300 px-8 py-3 rounded-lg font-medium hover:border-gray-500 transition"
            >
              Partner as Institution
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS CIVONEX ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What is Civonex?
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Civonex is a digital-first initiative focused on education, civic responsibility,
            and institutional growth. We help students learn practical skills, build civic
            sense among citizens, and support institutions in their digital journey.
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            Built for India. Designed for the next generation.
          </p>
        </div>
      </section>

      {/* ================= WHO WE HELP ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            One Platform. Three Missions.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">

            {/* Students */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold">For Students</h3>
              <p className="mt-4 text-gray-600">
                Civonex helps students learn practical knowledge, digital skills,
                and civic values beyond textbooks.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Career & life skills</li>
                <li>• Student-friendly learning</li>
                <li>• Civic awareness</li>
              </ul>

              <a
                href="/students"
                className="inline-block mt-6 font-medium text-black hover:underline"
              >
                Explore Student Programs →
              </a>
            </div>

            {/* Institutions */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold">For Institutions</h3>
              <p className="mt-4 text-gray-600">
                We help schools, colleges, and organizations modernize and connect
                digitally with students and communities.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Digital guidance</li>
                <li>• Online presence support</li>
                <li>• Student engagement</li>
              </ul>

              <a
                href="/institutions"
                className="inline-block mt-6 font-medium text-black hover:underline"
              >
                Work With Civonex →
              </a>
            </div>

            {/* Civic Awareness */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold">Civic Awareness</h3>
              <p className="mt-4 text-gray-600">
                Civonex promotes civic sense, responsibility, and awareness using
                simple and engaging digital content.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Rights & duties awareness</li>
                <li>• Social responsibility</li>
                <li>• Youth-driven initiatives</li>
              </ul>

              <a
                href="/learn"
                className="inline-block mt-6 font-medium text-black hover:underline"
              >
                Learn Civic Sense →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            How Civonex Works
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-xl font-semibold">Educate</h3>
              <p className="mt-3 text-gray-600">
                We create simple, digital-first educational content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Engage</h3>
              <p className="mt-3 text-gray-600">
                We connect students, institutions, and citizens.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Empower</h3>
              <p className="mt-3 text-gray-600">
                We help people and organizations grow with knowledge and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CIVONEX ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Civonex Exists
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            India has talent. India has youth. But education, civic sense,
            and institutions still lack modern digital support.
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            Civonex exists to bridge this gap — responsibly and digitally.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Be Part of the Change
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Whether you are a student, an institution, or a responsible citizen —
            Civonex is for you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/students"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Get Started
            </a>

            <a
              href="/contact"
              className="border border-gray-400 px-8 py-3 rounded-lg font-medium hover:border-white transition"
            >
              Contact Civonex
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
