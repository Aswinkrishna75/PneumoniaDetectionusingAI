
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { downloadReport } from "../utils/pdfReport";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCards from "../components/StatsCards";
import UploadedXray from "../components/UploadedXray";
import PredictionCard from "../components/PredictionCard";
import HeatmapCard from "../components/HeatmapCard";
import RecentPredictions from "../components/RecentPredictions";

export default function Dashboard() {
  const predictionData =
  JSON.parse(localStorage.getItem("latestPrediction")) || {
    prediction: "No Prediction",
    confidence: 0,
    image: null,
    heatmap: null,
    patientName: "",
    patientId: "",
    age: "",
    gender: "",
  };
  const navigate = useNavigate();

  // Test Backend Connection
  useEffect(() => {
    API.get("/")
      .then((res) => {
        console.log("Backend Response:", res.data);
      })
      .catch((err) => {
        console.error("Backend Error:", err);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Topbar />

        <div className="p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                AI Powered Pneumonia Detection System
              </p>
            </div>

           <div className="flex gap-3">
  <button
    onClick={() => navigate("/prediction")}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow"
  >
    + New Prediction
  </button>

  <button
    onClick={async () => {
  await downloadReport(item);
}}
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow"
  >
    Download Report
  </button>
</div>

          </div>

          {/* Statistics */}
          <StatsCards />

          {/* Main Dashboard */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

            <UploadedXray
  image={predictionData.image}
  patientName={predictionData.patientName}
  patientId={predictionData.patientId}
/>

            <PredictionCard
  prediction={predictionData.prediction}
  confidence={predictionData.confidence}
/>

          <HeatmapCard predictionData={predictionData} />

          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-4 gap-5 mt-8">

            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">
                New Scan
              </h3>

              <p className="text-gray-500 mt-2">
                Upload a chest X-ray for AI analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">
                Download Reports
              </h3>

              <p className="text-gray-500 mt-2">
                Export prediction reports in PDF.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">
                AI Model
              </h3>

              <p className="text-gray-500 mt-2">
                DenseNet121 | Accuracy 94.2%
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">
                System Status
              </h3>

              <p className="text-green-600 font-semibold mt-2">
                ● Online
              </p>
            </div>

          </div>

          {/* Recent Predictions */}
          <div className="mt-8">
            <RecentPredictions />
          </div>

        </div>

      </div>

    </div>
  );
}