import Link from "next/link";

export default function InstitutionsPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
<section className="relative bg-white">
  <div className="max-w-5xl mx-auto px-6 py-32 text-center">

    {/* Subtle institutional label */}
    <p className="uppercase tracking-widest text-sm text-gray-500 font-medium">
      Institutional Collaboration
    </p>

    {/* Main Heading */}
    <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Civonex for <span className="text-blue-600">Educational Institutions</span>
    </h1>

    {/* Core description */}
    <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Civonex partners with schools and colleges to support students through
      awareness, civic understanding, and real-world knowledge — in a manner
      that fully respects academic discipline, faculty authority, and
      institutional values.
    </p>

    {/* Trust promise */}
    <p className="mt-6 text-base text-gray-500 max-w-2xl mx-auto">
      We do not replace classrooms or curricula.  
      We work alongside institutions — with permission, structure, and clarity.
    </p>

  </div>

  {/* Soft divider */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full opacity-70"></div>
</section>


      {/* ================= WHY CIVONEX ================= */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-gray-900">
      Why Institutions Choose <span className="text-blue-600">Civonex</span>
    </h2>

    <p className="mt-8 text-gray-700 leading-relaxed">
      Educational institutions carry the responsibility of shaping not only
      academic excellence, but also responsible, aware, and disciplined
      citizens. Civonex exists to support this responsibility — not to alter or
      interfere with it.
    </p>

    <p className="mt-5 text-gray-700 leading-relaxed">
      Our role is clearly defined. We function as a supplementary awareness
      platform that focuses on civic understanding, ethical behavior, and
      real-world exposure — areas that naturally complement formal education
      but often extend beyond classroom time.
    </p>

    <p className="mt-5 text-gray-700 leading-relaxed">
      Every collaboration with Civonex is conducted with prior discussion,
      institutional approval, and alignment with faculty guidance. Content,
      sessions, and interactions are structured to respect academic schedules,
      student discipline, and institutional values.
    </p>

    {/* Institutional principles */}
    <div className="mt-12 grid md:grid-cols-3 gap-6">

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Respect for Authority
        </h3>
        <p className="text-sm text-gray-600">
          Faculty members and administrators retain full authority over student
          engagement, content approval, and program structure.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Non-Disruptive Approach
        </h3>
        <p className="text-sm text-gray-600">
          Civonex programs are designed to integrate smoothly without affecting
          academic routines, examinations, or institutional discipline.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Purpose-Driven Support
        </h3>
        <p className="text-sm text-gray-600">
          Our focus remains on awareness, responsibility, and civic sense —
          never on promotion, influence, or external agendas.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= WHAT WE OFFER ================= */}
<section className="py-28 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center text-gray-900">
      What Civonex <span className="text-blue-600">Provides</span>
    </h2>

    <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
      Civonex offerings are designed as structured, faculty-aligned initiatives
      that support student development beyond academics, while remaining fully
      compatible with institutional norms and expectations.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-20">

      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Student Awareness Initiatives
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Guided awareness sessions focused on civic responsibility, ethical
          conduct, and informed decision-making. These initiatives help students
          understand their roles within society, institutions, and digital
          spaces.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Practical & Civic Understanding
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Structured discussions that connect academic learning with real-world
          systems such as governance, public services, digital platforms, and
          social responsibilities — presented in a neutral, educational manner.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Values & Responsible Conduct
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Programs that reinforce discipline, ethical behavior, respect for
          rules, and responsible participation in both institutional and public
          environments.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= ON-CAMPUS PROGRAMS ================= */}
<section className="py-24 px-6 bg-blue-50/50">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-gray-900">
      Structured On-Campus <span className="text-blue-600">Programs</span>
    </h2>

    <p className="mt-8 text-gray-700 leading-relaxed">
      Civonex conducts structured on-campus programs in collaboration with
      educational institutions. Each program is planned, discussed, and
      implemented only after receiving institutional approval and guidance from
      faculty members.
    </p>

    <p className="mt-5 text-gray-700 leading-relaxed">
      Programs are designed to align with institutional schedules, student
      discipline frameworks, and academic priorities. Content scope and delivery
      methods are finalized in coordination with designated faculty
      representatives.
    </p>

    {/* Program Scope */}
    <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Program Scope May Include
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>• Student awareness and civic responsibility sessions</li>
        <li>• Discussions on ethical behavior and digital responsibility</li>
        <li>• Practical understanding of public systems and social duties</li>
        <li>• Interactive formats approved by faculty coordinators</li>
      </ul>
    </div>

    {/* Program Governance */}
    <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Program Governance & Oversight
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>• Conducted only with prior institutional consent</li>
        <li>• Faculty presence or supervision as required</li>
        <li>• Content boundaries defined in advance</li>
        <li>• No independent student engagement outside approved sessions</li>
      </ul>
    </div>

  </div>
</section>


      {/* ================= TRUST & INSTITUTIONAL ASSURANCE ================= */}
<section className="py-28 px-6 text-center">
  <div className="max-w-3xl mx-auto">

    <h2 className="text-3xl font-bold text-gray-900">
      Institutional Trust & <span className="text-blue-600">Accountability</span>
    </h2>

    <p className="mt-8 text-gray-700 leading-relaxed">
      Civonex is built on the principle that educational institutions are the
      primary authority in a student’s academic and developmental journey. Our
      role is supportive, limited, and accountable — never directive or
      independent.
    </p>

    <p className="mt-5 text-gray-700 leading-relaxed">
      We operate with full transparency in objectives, content, and methods.
      Institutions retain the right to review, modify, or discontinue
      collaboration at any stage, based on their internal policies and
      discretion.
    </p>

    {/* Assurance Points */}
    <div className="mt-14 grid gap-6 text-left">

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Authority & Oversight
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          All Civonex activities function under institutional oversight.
          Faculty members and administrators guide scope, structure, and
          student interaction at every level.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Ethical & Neutral Engagement
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Civonex does not promote ideologies, commercial interests, or external
          influence. Content remains educational, neutral, and aligned with
          civic responsibility.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-2">
          Transparency & Responsibility
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Objectives, session outlines, and engagement methods are communicated
          clearly in advance. Civonex remains accountable to institutional
          feedback and governance.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= INSTITUTIONAL CTA ================= */}
<section className="py-28 px-6 bg-gray-900 text-white text-center">
  <div className="max-w-3xl mx-auto">

    <h2 className="text-3xl font-bold">
      Initiate an Institutional Dialogue
    </h2>

    <p className="mt-6 text-gray-300 leading-relaxed">
      Civonex welcomes discussions with educational institutions interested in
      exploring structured, responsible, and faculty-aligned student support
      initiatives.
    </p>

    <p className="mt-4 text-gray-400 text-sm">
      All collaborations begin with a conversation — without obligation or
      commitment.
    </p>

    <div className="mt-10 flex justify-center">
      <Link
        href="/contact"
        className="px-10 py-3 bg-white text-gray-900 rounded-full font-semibold
                   hover:bg-gray-200 transition focus:outline-none focus:ring-2
                   focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Request a Discussion
      </Link>
    </div>

  </div>
</section>


    </main>
  );
}
