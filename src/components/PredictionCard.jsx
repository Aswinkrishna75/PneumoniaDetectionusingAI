import { ShieldAlert } from "lucide-react";

export default function PredictionCard({
  prediction = "PNEUMONIA DETECTED",
  confidence = 92.4,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center gap-3 mb-5">
        <ShieldAlert className="text-red-500" size={30} />
        <h2 className="text-2xl font-bold">
          Prediction Result
        </h2>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h3 className="text-3xl font-bold text-red-600">
          {prediction}
        </h3>

        <p className="text-gray-500 mt-2">
          AI detected possible pneumonia.
        </p>
      </div>

      <div className="mt-6">
        <div className="flex justify-between">
          <span>Confidence</span>
          <span className="font-bold text-red-500">
            {confidence}%
          </span>
        </div>

        <div className="mt-2 h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 bg-red-500 rounded-full"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>

        <div className="mt-5">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold">
            HIGH RISK
          </span>
        </div>
      </div>
    </div>
  );
}