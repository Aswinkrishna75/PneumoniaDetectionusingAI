import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function ConfidenceChart({ predictions }) {
  const data = predictions.map((item, index) => ({
    name: `P${index + 1}`,
    confidence: parseFloat(item.confidence),
  }));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Confidence Score Analysis
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="colorConfidence"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#2563eb"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#2563eb"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="confidence"
            stroke="#2563eb"
            fillOpacity={1}
            fill="url(#colorConfidence)"
          />

        </AreaChart>

      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="bg-blue-50 rounded-xl p-4 text-center">

          <p className="text-gray-500">
            Average
          </p>

          <h2 className="text-2xl font-bold text-blue-600">
            92.8%
          </h2>

        </div>

        <div className="bg-green-50 rounded-xl p-4 text-center">

          <p className="text-gray-500">
            Highest
          </p>

          <h2 className="text-2xl font-bold text-green-600">
            99%
          </h2>

        </div>

        <div className="bg-red-50 rounded-xl p-4 text-center">

          <p className="text-gray-500">
            Lowest
          </p>

          <h2 className="text-2xl font-bold text-red-600">
            81%
          </h2>

        </div>

      </div>

    </div>
  );
}