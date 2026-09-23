import {
  LogOut,
  Sun,
  Bell,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  // Get logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b px-8 py-5 flex items-center justify-between">

      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Pneumonia Detection from Chest X-Ray using Deep Learning
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Theme */}
        <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
          <Sun size={22} />
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-300"></div>

        {/* Doctor Profile */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-xl transition">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Doctor"
            className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
          />

          <div className="hidden md:block">
            <h3 className="font-semibold text-gray-900">
              {user?.name || "Dr. User"}
            </h3>

            <p className="text-sm text-gray-500">
              Radiologist
            </p>
          </div>

          <ChevronDown size={18} />
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </header>
  );
}