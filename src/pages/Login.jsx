import { Mail, Lock, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f5f7fb]">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-[#021648] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#021648] via-[#032a74] to-[#021648]" />

        <div className="relative z-10 p-16 w-full">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-3xl">
              🫁
            </div>

            <div>
              <h1 className="text-white font-bold text-4xl leading-none">
                PNEUMONIA
              </h1>
              <h1 className="text-white font-bold text-4xl">
                DETECTION
              </h1>
              <p className="text-gray-300 mt-2">
                AI Powered System
              </p>
            </div>
          </div>

          <h2 className="text-6xl font-bold text-white mb-4">
            Smart AI
            <span className="text-blue-400"> Detection</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-lg mb-12">
            Detect pneumonia from chest X-rays using advanced deep learning
            technology.
          </p>

          <div className="space-y-4">
            <Feature title="AI-Powered Diagnosis" />
            <Feature title="Confidence Score" />
            <Feature title="Grad-CAM Heatmaps" />
            <Feature title="Secure & Private" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white rounded-[32px] shadow-xl w-full max-w-2xl p-14">
          <h1 className="text-center text-6xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-10 text-xl">
            Sign in to continue to your dashboard
          </p>

          {/* Email */}
          <label className="font-semibold text-lg">
            Email Address
          </label>

          <div className="border mt-2 rounded-xl flex items-center px-4 py-4 mb-6">
            <Mail size={22} />

            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="ml-3 flex-1 outline-none"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password */}
          <label className="font-semibold text-lg">
            Password
          </label>

          <div className="border mt-2 rounded-xl flex items-center px-4 py-4 mb-6">
            <Lock size={22} />

            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="ml-3 flex-1 outline-none"
              placeholder="Enter your password"
            />

            <Eye size={22} />
          </div>

          <div className="flex justify-between mb-8">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600">
              Forgot Password?
            </a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-xl font-semibold"
          >
            Login →
          </button>

          <div className="flex items-center my-8">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-gray-400">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <button className="w-full border rounded-xl py-4 hover:bg-gray-50">
            Continue with Google
          </button>

          <p className="text-center mt-8">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-600 ml-2 font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white">
      {title}
    </div>
  );
}