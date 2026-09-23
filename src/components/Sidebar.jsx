import {
  LayoutDashboard,
  Upload,
  History,
  BarChart3,
  Brain,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={22} />,
    },
    {
      name: "New Prediction",
      path: "/prediction",
      icon: <Upload size={22} />,
    },
    {
      name: "History",
      path: "/history",
      icon: <History size={22} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={22} />,
    },
    {
      name: "Model Info",
      path: "/model-info",
      icon: <Brain size={22} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={22} />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-[#021648] to-[#011233] text-white flex flex-col">

      {/* Logo */}
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold leading-tight">
          PNEUMONIA
        </h1>

        <h1 className="text-4xl font-bold leading-tight">
          DETECTION
        </h1>

        <p className="text-gray-300 mt-2">
          AI Powered System
        </p>
      </div>

      {/* Navigation */}
      <div className="px-4 space-y-2">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 shadow-lg"
                  : "hover:bg-blue-800"
              }`
            }
          >
            {item.icon}

            <span className="text-lg">
              {item.name}
            </span>
          </NavLink>
        ))}

      </div>

      {/* AI Card */}
      <div className="mx-4 mt-auto mb-6 p-5 rounded-2xl border border-blue-800 bg-[#0A1D4D]">

        <h3 className="text-blue-400 font-semibold text-lg mb-3">
          AI Second Opinion
        </h3>

        <p className="text-gray-300 text-sm leading-7">
          This AI system assists radiologists by providing an
          accurate second opinion for pneumonia detection from
          chest X-rays. It is intended to support—not replace—
          professional medical diagnosis.
        </p>

      </div>

      {/* Footer */}
      <div className="px-6 pb-6 text-sm text-gray-400">
        © 2026 Pneumonia Detection
        <br />
        All Rights Reserved.
      </div>

    </aside>
  );
}