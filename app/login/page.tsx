"use client";
import Link from "next/link";

import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, name, email }),
    });

    if (res.ok) {
      setSuccess("Login request submitted successfully.");
      setName("");
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Civonex Login
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Select your role to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Login As
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
            >
              <option value="student">Student</option>
              <option value="institution">Institution</option>
              <option value="local">Local / Community</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gray-900 text-white rounded-full
                       hover:bg-gray-800 transition font-semibold"
          >
            {loading ? "Submitting..." : "Continue"}
          </button>

          {success && (
            <p className="text-green-600 text-center text-sm mt-3">
              {success}
            </p>
          )}

        </form>
        {/* Divider */}
<div className="flex items-center gap-3 my-6">
  <div className="flex-1 h-px bg-gray-200" />
  <span className="text-xs text-gray-400">OR</span>
  <div className="flex-1 h-px bg-gray-200" />
</div>

{/* Create Account */}
<p className="text-center text-sm text-gray-600">
  Don’t have an account?{" "}
  <Link
    href="/register"
    className="text-blue-600 font-medium hover:underline"
  >
    Create Account
  </Link>
</p>

      </div>
    </main>
  );
}
