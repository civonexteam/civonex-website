import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Building an <span className="text-blue-600">Educated, Aware</span> &{" "}
          <span className="text-blue-600">Responsible</span> Generation
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
          Civonex is a student-driven, digital-first initiative focused on
          education, civic awareness, and practical knowledge — working with
          students, educators, and institutions.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <Link
            href="/students"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
          >
            For Students
          </Link>

          <Link
            href="/institutions"
            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            For Institutions
          </Link>
        </div>
      </section>

      {/* WHAT IS CIVONEX */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What is <span className="text-blue-600">Civonex</span>?
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Civonex is built to support students beyond academics by encouraging
            practical understanding, civic responsibility, and real-world
            awareness. We aim to bridge the gap between classroom learning and
            real-life challenges through awareness and guided initiatives.
          </p>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Who is Civonex <span className="text-blue-600">For</span>?
          </h2>
          <p className="text-gray-500 text-center mt-3">
            Designed to support students, institutions, and society
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Students */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">🎓 Students</h3>
              <p className="text-gray-600">
                Helping students grow beyond exams with civic sense,
                practical knowledge, and real-world awareness.
              </p>
              <Link
                href="/students"
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Explore for Students →
              </Link>
            </div>

            {/* Institutions */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">🏫 Institutions</h3>
              <p className="text-gray-600">
                Collaborating with schools and colleges through structured,
                permission-based awareness and learning programs.
              </p>
              <Link
                href="/institutions"
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                For Institutions →
              </Link>
            </div>

            {/* Society */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">🌍 Society</h3>
              <p className="text-gray-600">
                Promoting civic sense, responsible behavior, and awareness to
                build a more informed society.
              </p>
              <Link
                href="/civic-sense"
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </section>
{/* ================= HOW CIVONEX WORKS ================= */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
      How Civonex Works
    </h2>

    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      Civonex works in collaboration with students, educators, and institutions
      to create meaningful learning and awareness experiences.
    </p>

    <div className="mt-16 grid gap-10 md:grid-cols-3 text-left">

      {/* Step 1 */}
      <div className="border border-gray-200 rounded-xl p-8 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">
          1. Learn & Understand
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Students are introduced to practical concepts, civic awareness,
          and real-world systems in a simple and relatable way.
        </p>
      </div>

      {/* Step 2 */}
      <div className="border border-gray-200 rounded-xl p-8 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">
          2. Engage & Discuss
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Through guided discussions and sessions, students reflect,
          ask questions, and connect learning with everyday life.
        </p>
      </div>

      {/* Step 3 */}
      <div className="border border-gray-200 rounded-xl p-8 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">
          3. Apply Responsibly
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          The focus is on responsible application — better decision-making,
          civic responsibility, and awareness beyond the classroom.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ON-CAMPUS PROGRAMS */}
      <section className="py-20 px-6 bg-blue-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            On-Campus <span className="text-blue-600">Programs & Events</span>
          </h2>

          <p className="text-gray-700 mt-6 leading-relaxed">
            Civonex works directly with schools and colleges to conduct
            awareness sessions, interactive workshops, and educational programs.
            These programs focus on practical knowledge, civic responsibility,
            and student awareness beyond textbooks.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Civic awareness & responsibility</li>
            <li>• Digital literacy & online behavior</li>
            <li>• Real-world understanding beyond syllabus</li>
            <li>• Interactive discussion-based learning</li>
          </ul>

          <p className="mt-6 text-gray-600">
            All activities are conducted with institutional permission and
            respect for academic values.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-blue-600">Vision</span>
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            To contribute toward a generation that is educated, aware,
            digitally responsible, and socially conscious — strengthening
            institutions and society through knowledge and values.
          </p>
        </div>
      </section>

{/* ================= WORKING WITH INSTITUTIONS ================= */}
<section className="py-20 px-6 bg-blue-50">
  <div className="max-w-6xl mx-auto">

    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Working With Schools & Colleges
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Civonex believes that meaningful student development happens
        best when initiatives work in coordination with educational
        institutions and educators.
      </p>
    </div>

    <div className="mt-16 grid gap-10 md:grid-cols-3">

      {/* Point 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900">
          Permission-Based Programs
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          All Civonex activities are conducted only after prior
          approval from the institution. We respect institutional
          policies, structure, and academic schedules.
        </p>
      </div>

      {/* Point 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900">
          Teacher & Management Coordination
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Sessions are planned in coordination with teachers and
          management to ensure relevance, discipline, and a positive
          learning environment for students.
        </p>
      </div>

      {/* Point 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900">
          No Disruption to Academics
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Civonex programs are designed to complement existing
          academic efforts, not replace or disrupt classroom learning.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* ================= PURPOSE-DRIVEN CTA ================= */}
<section className="py-24 px-6 bg-gray-900">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      Let’s Work Together for Student Growth
    </h2>

    <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
      Civonex welcomes collaboration with schools, colleges, educators,
      and student communities who believe in responsible education,
      civic awareness, and practical understanding.
    </p>

    <p className="mt-4 text-gray-400 text-base max-w-3xl mx-auto">
      If you are interested in structured awareness sessions, guided
      discussions, or student-focused initiatives, we would be glad
      to explore possibilities together — with respect for academic
      priorities and institutional values.
    </p>

    <div className="mt-10">
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-200 transition"
      >
        Connect with Civonex
      </a>
    </div>

  </div>
</section>


      

    </main>
  );
}