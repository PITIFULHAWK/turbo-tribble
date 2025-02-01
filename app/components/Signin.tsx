"use client"; // Needed for useState and event handling in App Router
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Signin = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);
  };

  return (
    <div>
<Header/>
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Hey User! 📩</h2>
        <p className="text-gray-600 text-center mb-4">
          Enter the OTP sent to your registered email address.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-600 transition-all"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Signin;
