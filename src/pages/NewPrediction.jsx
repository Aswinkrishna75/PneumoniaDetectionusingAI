import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { downloadReport } from "../utils/pdfReport";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  UploadCloud,
  Loader2,
  ScanSearch,
} from "lucide-react";

import { savePrediction } from "../utils/helpers";
import heatmap from "../assets/heatmap.png";

export default function NewPrediction() {

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));

  };

  const analyzeImage = async () => {

    if (!selectedImage) {
      alert("Upload X-Ray");
      return;
    }

    if (
      !patientId ||
      !patientName ||
      !age ||
      !gender
    ) {
      alert("Fill all patient details");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {

      const res = await API.post("/predict", formData);

      const predictionData = {
  image: preview,
  patientId,
  patientName,
  age,
  gender,
  prediction: res.data.prediction,
  confidence: res.data.confidence,

  // Real heatmap from Flask
  heatmap: `http://127.0.0.1:5000/${res.data.heatmap}`,

  date: new Date().toLocaleDateString()
};

      savePrediction(predictionData);

      localStorage.setItem(
        "latestPrediction",
        JSON.stringify(predictionData)
      );

      alert("Prediction Successful");

      navigate("/dashboard");

    }

    catch (err) {
  console.error(err);

  setLoading(false);

  if (err.response) {
    alert("Backend Error: " + JSON.stringify(err.response.data));
  } else if (err.request) {
    alert("Cannot connect to Flask backend.");
  } else {
    alert(err.message);
  }
}
    finally {

      setLoading(false);

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
            Upload Chest X-Ray
          </p>

          <div className="bg-white rounded-2xl shadow p-8">

            <div className="grid grid-cols-2 gap-4">

              <input
                className="border p-3 rounded-xl"
                placeholder="Patient ID"
                value={patientId}
                onChange={(e)=>setPatientId(e.target.value)}
              />

              <input
                className="border p-3 rounded-xl"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
              />

              <input
                className="border p-3 rounded-xl"
                placeholder="Age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
              />

              <select
                className="border p-3 rounded-xl"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
              >

                <option value="">Gender</option>

                <option>Male</option>

                <option>Female</option>

              </select>

            </div>

            <label className="border-2 border-dashed rounded-xl h-72 flex flex-col justify-center items-center mt-6 cursor-pointer">

              <UploadCloud
                size={60}
                className="text-blue-600"
              />

              <p className="mt-4">
                Click to Upload X-Ray
              </p>

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImage}
              />

            </label>

            {preview && (

              <img
                src={preview}
                alt=""
                className="mt-6 rounded-xl w-full h-96 object-contain border"
              />

            )}

            <button

              onClick={analyzeImage}

              disabled={loading}

              className="mt-6 w-full bg-blue-600 text-white py-4 rounded-xl flex justify-center items-center gap-3"

            >

              {loading ? (

                <>

                  <Loader2 className="animate-spin"/>

                  Analyzing...

                </>

              ) : (

                <>

                  <ScanSearch/>

                  Analyze Image

                </>

              )}

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}