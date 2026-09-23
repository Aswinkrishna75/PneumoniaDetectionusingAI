
import { User, Mail, Lock, Eye, Stethoscope } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Registration Successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-[#f5f7fb]">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#021648] via-[#032a74] to-[#021648] text-white p-16 flex-col justify-center">

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-500 p-4 rounded-full">
            <Stethoscope size={35} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              PNEUMONIA
            </h1>
            <h1 className="text-4xl font-bold">
              DETECTION
            </h1>
            <p className="text-gray-300">
              AI Powered System
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-4">
          Create Your Account
        </h2>

        <p className="text-gray-300 text-lg">
          Join our AI-powered pneumonia detection platform
          and start analyzing chest X-rays efficiently.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-10">

          <h2 className="text-5xl font-bold text-center text-slate-900">
            Register
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Create a new account
          </p>

          {/* Full Name */}
          <div className="mb-5">
            <label className="font-medium">
              Full Name
            </label>

            <div className="border rounded-xl flex items-center px-4 py-3 mt-2">
              <User size={20} className="text-gray-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="ml-3 flex-1 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="font-medium">
              Email Address
            </label>

            <div className="border rounded-xl flex items-center px-4 py-3 mt-2">
              <Mail size={20} className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="ml-3 flex-1 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="font-medium">
              Password
            </label>

            <div className="border rounded-xl flex items-center px-4 py-3 mt-2">
              <Lock size={20} className="text-gray-400" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="ml-3 flex-1 outline-none"
              />

              <Eye size={20} className="text-gray-400" />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="font-medium">
              Confirm Password
            </label>

            <div className="border rounded-xl flex items-center px-4 py-3 mt-2">
              <Lock size={20} className="text-gray-400" />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="ml-3 flex-1 outline-none"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button className="w-full border rounded-xl py-4 hover:bg-gray-50">
            Continue with Google
          </button>

          <p className="text-center mt-6">
            Already have an account?
            <Link
              to="/"
              className="text-blue-600 ml-1 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

