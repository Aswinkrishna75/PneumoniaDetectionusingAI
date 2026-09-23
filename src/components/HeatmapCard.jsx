export default function HeatmapCard({ predictionData }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-2xl font-bold mb-4">
        Grad-CAM Heatmap
      </h2>

      <img
        src={predictionData.heatmap}
        alt="Heatmap"
        className="w-full h-72 rounded-xl object-contain"
      />

      <div className="mt-4">
        <div className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500"></div>

        <div className="flex justify-between text-sm mt-2">
          <span>Low Importance</span>
          <span>High Importance</span>
        </div>
      </div>
    </div>
  );
}