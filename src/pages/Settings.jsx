
import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Hospital,
  Moon,
  Bell,
  Shield,
  Database,
  Download,
  LogOut,
  Brain,
  Lock,
  Globe,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Settings() {
    const [doctorName, setDoctorName] = useState("Dr. Aswin Krishna");
  const [email, setEmail] = useState("doctor@gmail.com");
  const [hospital, setHospital] = useState("City Hospital");
  const [phone, setPhone] = useState("+91 9876543210");

  const [editing, setEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("darkMode");
  return savedTheme === "true";
});

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};
useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);
  return (
    <div
  className={`flex min-h-screen ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-slate-100 text-black"
  }`}
>
      <Sidebar />

      <div
  className={`flex-1 ${
    darkMode ? "bg-gray-900" : ""
  }`}
>
        <Topbar />

        <div className="p-8">

          <h1
  className={`text-4xl font-bold ${
    darkMode ? "text-white" : "text-black"
  }`}
>
            Settings
          </h1>

          <p className="text-gray-500 mb-8">
  Manage your profile, preferences and application settings.
</p>

<div className="grid lg:grid-cols-2 gap-8">

  {/* Doctor Profile Card */}

  <div className="bg-white rounded-2xl shadow-lg p-6">

    <div className="flex items-center gap-5">

      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
        <User size={45} className="text-blue-600" />
      </div>

      <div>

       <h2 className="text-2xl font-bold text-slate-800">
  {doctorName}
</h2>

        <p
  className={`${
    darkMode
      ? "text-gray-300"
      : "text-gray-500"
  }`}
>
          Radiologist
        </p>

      </div>

    </div>

    <hr className="my-6" />

    <div className="space-y-5">

      <div className="flex items-center gap-3">

        <Mail className="text-blue-600" />

        <div>

          <p className="text-gray-500 text-sm">
            Email
          </p>

          <p className="font-semibold">
            {email}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <Hospital className="text-green-600" />

        <div>

          <p className="text-gray-500 text-sm">
            Hospital
          </p>

          <p className="font-semibold">
            {hospital}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <Phone className="text-purple-600" />

        <div>

          <p className="text-gray-500 text-sm">
            Phone
          </p>

          <p className="font-semibold">
           {phone}
          </p>

        </div>

      </div>

    </div>

    <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">

      Edit Profile

    </button>

  </div>
{/* Appearance */}
<div
  className={`rounded-2xl shadow p-6 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white"
  }`}
>


  <h2 className="text-2xl font-bold mb-6">
    Appearance
  </h2>

  <div className="space-y-5">

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">
        <Moon className="text-indigo-600" />
        <span>Dark Mode</span>
      </div>

      <input
type="checkbox"
checked={darkMode}
onChange={() => setDarkMode(!darkMode)}
/>

    </div>

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">
        <Bell className="text-yellow-500" />
        <span>Notifications</span>
      </div>

      <input
        type="checkbox"
        defaultChecked
        className="w-5 h-5"
      />

    </div>

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">
        <Globe className="text-green-600" />
        <span>Language</span>
      </div>

      <select className="border rounded-lg px-3 py-2">

        <option>English</option>

        <option>Hindi</option>

      </select>

    </div>

  </div>

</div>
{/* Security */}

<div
  className={`rounded-2xl shadow p-6 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white"
  }`}
>

  <h2 className="text-2xl font-bold mb-6">
    Security
  </h2>

  <div className="space-y-5">

    <button className="w-full flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50">

      <Shield className="text-blue-600"/>

      Enable Two Factor Authentication

    </button>

    <button className="w-full flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50">

      <Lock className="text-red-500"/>

      Change Password

    </button>

  </div>

</div>
{/* AI Model */}

<div
  className={`rounded-2xl shadow p-6 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white"
  }`}
>

  <h2 className="text-2xl font-bold mb-6">
    AI Model
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between">

      <span>Model Version</span>

      <span className="font-semibold">
        PneumoNet v2.1
      </span>

    </div>

    <div className="flex justify-between">

      <span>Accuracy</span>

      <span className="font-semibold">
        94.2%
      </span>

    </div>

    <div className="flex justify-between">

      <span>Framework</span>

      <span className="font-semibold">
        TensorFlow
      </span>

    </div>

    <button className="mt-4 w-full bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700">

      Update Model

    </button>

  </div>

</div>
{/* Data Management */}
<div
  className={`rounded-2xl shadow p-6 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white"
  }`}
>


  <h2 className="text-2xl font-bold mb-6">
    Data Management
  </h2>

  <div className="space-y-4">

    <button className="w-full flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50">

      <Download className="text-green-600"/>

      Export Predictions

    </button>

    <button className="w-full flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50">

      <Database className="text-blue-600"/>

      Backup Database

    </button>

  </div>
  {/* Logout */}
<div
  className={`rounded-2xl shadow p-6 ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white"
  }`}
>


  <h2 className="text-2xl font-bold mb-6">
    Session
  </h2>

  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl flex justify-center items-center gap-3">

    <LogOut />

    Logout

  </button>

</div>
  
</div>


  {/* Preferences Card */}

  <div className="bg-white rounded-2xl shadow-lg p-6">

    <h2 className="text-2xl font-bold mb-6">
      Preferences
    </h2>

    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <Moon className="text-yellow-500" />

          <span>Dark Mode</span>

        </div>

        <input
  type="checkbox"
  checked={darkMode}
  onChange={toggleDarkMode}
  className="w-5 h-5"
/>

      </div>

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <Globe className="text-blue-600" />

          <span>Language</span>

        </div>

        <select className="border rounded-lg px-3 py-2">

          <option>English</option>
          <option>Hindi</option>
          <option>Tamil</option>

        </select>

      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">

        Save Preferences

      </button>

    </div>

  </div>

</div>
        </div>
      </div>
    </div>
    
  );
}