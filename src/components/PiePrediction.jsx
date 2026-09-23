import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function PredictionPieChart({ predictions }) {
  const pneumonia = predictions.filter(
    (p) => p.result === "Pneumonia"
  ).length;

  const normal = predictions.filter(
    (p) => p.result === "Normal"
  ).length;

  const data = [
    { name: "Pneumonia", value: pneumonia },
    { name: "Normal", value: normal },
  ];

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Prediction Distribution
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-red-50 rounded-xl p-4 text-center">

          <h3 className="text-red-600 text-lg font-semibold">
            Pneumonia
          </h3>

          <h1 className="text-3xl font-bold">
            {pneumonia}
          </h1>

        </div>

        <div className="bg-green-50 rounded-xl p-4 text-center">

          <h3 className="text-green-600 text-lg font-semibold">
            Normal
          </h3>

          <h1 className="text-3xl font-bold">
            {normal}
          </h1>

        </div>

      </div>
    </div>
  );
}