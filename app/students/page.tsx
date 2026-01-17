export default function StudentsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">For Students</h1>

      <p className="text-lg text-gray-600 mb-6">
        Civonex helps students grow beyond academics by building awareness,
        responsibility, and real-world understanding.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li>• Learn civic responsibility and social awareness</li>
        <li>• Understand how systems and society work</li>
        <li>• Build digital literacy for the modern world</li>
        <li>• Prepare for life, not just exams</li>
      </ul>

      <p className="mt-10">
  Learn more about{" "}
  <a href="/civic-sense" className="text-blue-600 underline">
    civic responsibility
  </a>{" "}
  and how it shapes society.
</p>


      <p className="mt-8 text-gray-600 italic">
        Because education is not just about marks — it’s about mindset.
      </p>
    </main>
  );
}
