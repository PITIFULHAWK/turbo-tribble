"use client"
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Link from "next/link";
export default function Signup() {
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
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mt-10 mb-5">
        <h2 className="text-2xl font-bold text-black-500 text-center mb-4">
           It seems you are not signed up!
        </h2>
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
            </form>
        <p className="text-gray-600 font-bold text-center mb-4 mt-5">
          Please sign up to continue.
        </p>
        <Link href="/signin">
        <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
            >
             Signup
          </button>
                </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
