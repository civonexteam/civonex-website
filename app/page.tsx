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
            and empowering institutions using technology — both online and through
            on-ground programs in schools and colleges.
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
            and institutional growth. We work with students, citizens, and educational
            institutions to create meaningful learning experiences.
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            Along with digital learning, Civonex actively collaborates with schools
            and colleges to conduct student-focused events and awareness programs.
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
                Civonex helps students gain practical knowledge, digital awareness,
                and civic values through learning sessions and campus-based programs.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Practical & real-world knowledge</li>
                <li>• Career and life skills</li>
                <li>• Civic sense & responsibility</li>
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
                We collaborate with schools and colleges to conduct structured
                events, workshops, and awareness sessions aligned with
                institutional values.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Student development programs</li>
                <li>• Digital & civic awareness sessions</li>
                <li>• Institution-friendly approach</li>
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
                Civonex promotes civic sense and social responsibility
                among students and citizens through simple, meaningful initiatives.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Rights & duties awareness</li>
                <li>• Responsible citizenship</li>
                <li>• Youth-led initiatives</li>
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

      {/* ================= EVENTS & PRACTICAL PROGRAMS ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Institutional Events & Practical Learning
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-4xl mx-auto">
            Civonex works directly with educational institutions to organize
            workshops, student interaction sessions, and awareness programs
            focused on practical knowledge and real-world exposure.
          </p>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            How Civonex Works
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-xl font-semibold">Educate</h3>
              <p className="mt-3 text-gray-600">
                We educate students through digital content and
                institution-based learning sessions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Engage</h3>
              <p className="mt-3 text-gray-600">
                We engage directly with students, teachers,
                and institutions on campus.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Empower</h3>
              <p className="mt-3 text-gray-600">
                We empower students with skills and institutions
                with responsible digital support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Built on Trust with Institutions
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Civonex believes in long-term collaboration with schools,
            colleges, teachers, and students. Our focus is
            responsible education, not short-term promotion.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Bring Civonex to Your Institution
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Interested in student programs, workshops, or awareness sessions?
            Let’s collaborate for meaningful impact.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Contact for Collaboration
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
