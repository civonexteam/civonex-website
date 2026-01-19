import Link from "next/link";

export default function StudentsPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Civonex <span className="text-blue-600">for Students</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
          Helping students grow beyond exams by building
          <span className="font-medium"> practical knowledge, civic sense</span>,
          and real-world awareness.
        </p>

        <div className="mt-10">
          <Link
            href="/civic-sense"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Explore Awareness
          </Link>
        </div>
      </section>

      {/* WHY CIVONEX */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-blue-600">Why</span> Civonex for Students?
          </h2>
          <p className="text-gray-500 mt-3">
            Education should prepare you for real life, not just exams.
          </p>

          <p className="text-gray-700 mt-6 leading-relaxed">
            While academic knowledge is important, students also need awareness
            about society, responsibilities, and how real-world systems work.
            Civonex exists to bridge this gap by supporting students with
            guidance, awareness, and learning that complements formal education.
          </p>
        </div>
      </section>

      {/* WHAT STUDENTS WILL LEARN */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What You Will <span className="text-blue-600">Learn</span>
          </h2>
          <p className="text-gray-500 text-center mt-3">
            Skills and awareness that matter beyond classrooms
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "🧠 Civic Sense & Responsibility",
                desc: "Understanding rights, duties, and responsible behavior in everyday life.",
              },
              {
                title: "🌍 Practical Knowledge",
                desc: "Awareness about how society, systems, and real-life situations function.",
              },
              {
                title: "📱 Digital Awareness",
                desc: "Responsible use of technology, online safety, and digital behavior.",
              },
              {
                title: "🎯 Thinking Beyond Exams",
                desc: "Developing awareness and decision-making skills for long-term growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL KNOWLEDGE */}
      <section className="bg-blue-50/50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            What We Mean by <span className="text-blue-600">Practical Knowledge</span>
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed">
            Practical knowledge does not mean replacing academic learning.
            It means understanding how education connects with real-life
            situations — society, governance, digital spaces, responsibilities,
            and everyday decisions.
          </p>
        </div>
      </section>

      {/* INSTITUTION TRUST */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Built with <span className="text-blue-600">Institutional Trust</span>
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed">
            Civonex respects the role of teachers and educational institutions.
            All student-focused activities are planned with guidance,
            discipline, and academic values in mind.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-24 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold">
          Learn. Grow. Become Aware.
        </h2>
        <p className="text-gray-300 mt-4">
          Civonex supports students on their journey beyond classrooms.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Stay Connected
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white font-semibold text-lg">Civonex</p>
          <p className="mt-1 text-sm">Educate. Empower. Engage.</p>

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/institutions" className="hover:text-white">Institutions</Link>
            <Link href="/civic-sense" className="hover:text-white">Civic Sense</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>

          <p className="text-xs mt-8">
            © {new Date().getFullYear()} Civonex. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
