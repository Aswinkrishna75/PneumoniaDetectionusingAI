import API from "../api/api";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  UploadCloud,
  Image,
  Loader2,
  Download,
  ScanSearch,
} from "lucide-react";

import normalXray from "../assets/normal-Xray.png";
import pneumoniaXray from "../assets/pneumonia-xray.png";
import heatmap from "../assets/heatmap.png";
import { savePrediction } from "../utils/helpers";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function NewPrediction() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
const [preview, setPreview] = useState(null);

const [loading, setLoading] = useState(false);
const [showResult, setShowResult] = useState(false);

const [prediction, setPrediction] = useState("");
const [confidence, setConfidence] = useState(0);

// Patient Details
const [patientId, setPatientId] = useState("");
const [patientName, setPatientName] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    setPreview(URL.createObjectURL(file));
  };

 const analyzeImage = async () => {

  if (!selectedImage) {
    alert("Upload an X-ray first");
    return;
  }
  if (!patientId || !patientName || !age || !gender) {
    alert("Please fill all patient details.");
    return;
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("file", selectedImage);

  try {

    const res = await API.post("/predict", formData);
    setPrediction(res.data.prediction);
setConfidence(res.data.confidence);
setShowResult(true);

    const predictionData = {
  image: preview,
  patientId,
  patientName,
  age,
  gender,
  prediction: res.data.prediction,
  confidence: res.data.confidence,
  heatmap,
  date: new Date().toLocaleDateString()
};

   localStorage.setItem(
  "latestPrediction",
  JSON.stringify(predictionData)
);

savePrediction(predictionData);

    setLoading(false);

    navigate("/dashboard");
    

  } catch (err) {
  console.error("Prediction Error:", err);

  if (err.response) {
    console.log("Backend Response:", err.response.data);
  }

  setLoading(false);
  alert("Prediction failed");
}

};


  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold">
            New Prediction
          </h1>

          <p className="text-gray-500 mb-8">
            Upload Chest X-Ray and let AI detect Pneumonia.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Upload Box */}

            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Upload Chest X-Ray
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">

  <input
    type="text"
    placeholder="Patient ID"
    value={patientId}
    onChange={(e) => setPatientId(e.target.value)}
    className="border rounded-xl p-3 outline-none"
  />

  <input
    type="text"
    placeholder="Patient Name"
    value={patientName}
    onChange={(e) => setPatientName(e.target.value)}
    className="border rounded-xl p-3 outline-none"
  />

  <input
    type="number"
    placeholder="Age"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    className="border rounded-xl p-3 outline-none"
  />

  <select
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    className="border rounded-xl p-3 outline-none"
  >
    <option value="">Gender</option>
    <option>Male</option>
    <option>Female</option>
  </select>

</div>

              <label
                className="border-2 border-dashed border-blue-300 rounded-2xl h-72 flex flex-col justify-center items-center cursor-pointer hover:bg-blue-50 transition"
              >
                <UploadCloud
                  size={60}
                  className="text-blue-600"
                />

                <h3 className="mt-4 text-xl font-semibold">
                  Drag & Drop Image
                </h3>

                <p className="text-gray-500 mt-2">
                  or Click to Browse
                </p>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>

              {preview && (

                <div className="mt-8">

                  <h3 className="font-bold text-lg mb-4">
                    Preview
                  </h3>

                 <img
  src={preview}
  alt="Preview"
  className="rounded-xl w-full h-80 object-contain border bg-black"
/>

                </div>

              )}

              <button
                onClick={analyzeImage}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold flex justify-center items-center gap-3"
              >
                <ScanSearch />

                Analyze Image
              </button>

            </div>

            {/* Result */}

            <div className="space-y-6">

              <div className="bg-white rounded-2xl shadow p-8">

                <h2 className="text-2xl font-bold mb-6">
                  AI Prediction
                </h2>

                {!loading && !showResult && (

                  <div className="text-center py-20">

                    <Image
                      size={70}
                      className="mx-auto text-gray-400"
                    />

                    <p className="mt-4 text-gray-500">
                      Upload an X-Ray to begin prediction.
                    </p>

                  </div>

                )}

                {loading && (

                  <div className="text-center py-20">

                    <Loader2
                      className="animate-spin mx-auto text-blue-600"
                      size={70}
                    />

                    <h2 className="mt-6 text-2xl font-bold">
                      AI is Analyzing...
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Please wait a few seconds.
                    </p>

                  </div>

                )}

                {showResult && (
  <>
    <div
      className={`rounded-xl p-6 ${
        prediction === "PNEUMONIA"
          ? "bg-red-50 border border-red-300"
          : "bg-green-50 border border-green-300"
      }`}
    >
      <h2
        className={`text-3xl font-bold ${
          prediction === "PNEUMONIA"
            ? "text-red-600"
            : "text-green-600"
        }`}
      >
        {prediction}
      </h2>

      <div className="mt-4 space-y-2 text-gray-600">
        <p><strong>Patient:</strong> {patientName}</p>
        <p><strong>ID:</strong> {patientId}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Confidence:</strong> {confidence}%</p>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="font-semibold">Confidence Score</h3>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
        <div
          className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 h-4 rounded-full"
          style={{ width: `${confidence}%` }}
        />
      </div>
    </div>

    <div className="mt-8">
      <h3 className="font-bold mb-4">Grad-CAM Heatmap</h3>

      <img
        src={heatmap}
        alt="Heatmap"
        className="rounded-xl"
      />
    </div>

    <button
     onClick={() =>
  downloadReport({
    patientId,
    patientName,
    age,
    gender,
    prediction,
    confidence,
    date: new Date().toLocaleDateString(),
  })
}
      className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex justify-center gap-3"
    >
      <Download />
      Download Report
    </button>
  </>
)}

              </div>

            </div>

          </div>

          {/* Example Images */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-white rounded-xl shadow p-5">

              <h2 className="font-bold text-xl mb-4">

                Normal Chest X-Ray

              </h2>

              <img
                src={normalXray}
                alt=""
                className="rounded-xl"
              />

            </div>

            <div className="bg-white rounded-xl shadow p-5">

              <h2 className="font-bold text-xl mb-4">

                Pneumonia Chest X-Ray

              </h2>

              <img
                src={pneumoniaXray}
                alt=""
                className="rounded-xl"
              />

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
