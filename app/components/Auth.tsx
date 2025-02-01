"use client";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

import { useState } from "react";

const Auth = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div>
<Header/>
    <div className="flex items-center justify-center h-96 bg-gray-300">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Future Starts Here</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
            />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
            />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
            />
            <Link href="/signin">
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-800 transition-all mt-4"
            >
             Start Your Journey
          </button>
              </Link>
        </form>
      </div>
    </div>
    <Footer/>
              </div>
  );
};

export default Auth;
