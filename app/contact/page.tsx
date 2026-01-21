"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  message: string;
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);

  /* Load reviews from localStorage */
  useEffect(() => {
    const stored = localStorage.getItem("civonex-reviews");
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  /* Save reviews to localStorage */
  useEffect(() => {
    localStorage.setItem("civonex-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    const newReview: Review = {
      name,
      message,
    };

    setReviews([newReview, ...reviews]);

    setName("");
    setMessage("");
  };

  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact & Feedback
        </h1>
        <p className="mt-6 text-gray-600">
          Share your thoughts, feedback, or suggestions about Civonex.
          Your feedback helps us improve.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Submit Your Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Message / Feedback
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Write your feedback here"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-gray-900 text-white rounded-full
                       hover:bg-gray-800 transition font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      {/* ================= PUBLIC FEEDBACK ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Public Feedback
          </h2>

          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            Feedback shared by visitors about Civonex as a platform.
            Institutional collaborations are not displayed here.
          </p>

          <div className="mt-12 space-y-6">
            {reviews.length === 0 && (
              <p className="text-center text-gray-500">
                No feedback yet. Be the first to share your thoughts.
              </p>
            )}

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <p className="text-gray-700">
                  “{review.message}”
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="py-16 px-6 text-center">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Note: This feedback section reflects individual opinions about Civonex.
          Details of institutional collaborations are managed separately and
          are not shown here.
        </p>
      </section>

    </main>
  );
}
