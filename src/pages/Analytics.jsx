import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";


import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

export default function Analytics() {
  const predictions =
    JSON.parse(localStorage.getItem("predictions")) || [];

  const total = predictions.length;

  const pneumonia = predictions.filter(
    (p) => p.result === "Pneumonia"
  ).length;

  const normal = predictions.filter(
    (p) => p.result === "Normal"
  ).length;

  const averageConfidence =
    predictions.length > 0
      ? (
          predictions.reduce(
            (sum, item) =>
              sum + parseFloat(item.confidence),
            0
          ) / predictions.length
        ).toFixed(1)
      : 0;

  // Pie Chart
  const pieData = [
    {
      name: "Pneumonia",
      value: pneumonia,
    },
    {
      name: "Normal",
      value: normal,
    },
  ];

  // Monthly Bar Chart
  const monthlyData = [
  { month: "Jan", predictions: 14 },
  { month: "Feb", predictions: 18 },
  { month: "Mar", predictions: 25 },
  { month: "Apr", predictions: 22 },
  { month: "May", predictions: 31 },
  { month: "Jun", predictions: total },
];

  // Daily Line Chart
  const dailyData = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 15 },
  { day: "Wed", value: 9 },
  { day: "Thu", value: 18 },
  { day: "Fri", value: 22 },
  { day: "Sat", value: 14 },
  { day: "Sun", value: 11 },
];

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-gray-500 mb-8">
            AI Prediction Statistics
          </p>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

  <Card
    title="Total Predictions"
    value={total}
    color="bg-blue-500"
    icon="📊"
  />

  <Card
    title="Pneumonia Cases"
    value={pneumonia}
    color="bg-red-500"
    icon="🫁"
  />

  <Card
    title="Normal Cases"
    value={normal}
    color="bg-green-500"
    icon="✅"
  />

  <Card
    title="Avg Confidence"
    value={`${averageConfidence}%`}
    color="bg-yellow-500"
    icon="🎯"
  />

  <Card
    title="Model Accuracy"
    value="94.2%"
    color="bg-indigo-500"
    icon="🤖"
  />

</div>

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            {/* Bar */}

            <div className="bg-white rounded-xl shadow p-5">

              <h2 className="font-bold text-xl mb-5">
                Monthly Predictions
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Bar
  dataKey="predictions"
  radius={[10, 10, 0, 0]}
  fill="#2563eb"
/>
                </BarChart>
              </ResponsiveContainer>

            </div>

            {/* Pie */}

            <div className="bg-white rounded-xl shadow p-5">

              <h2 className="font-bold text-xl mb-5">
                Normal vs Pneumonia
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

       {/* Line */}

<div className="bg-white rounded-xl shadow p-5 mt-10">

  <h2 className="font-bold text-xl mb-5">
    Daily Predictions
  </h2>

  <ResponsiveContainer
    width="100%"
    height={320}
  >
    <LineChart data={dailyData}>

      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="day" />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="value"
        stroke="#2563eb"
        strokeWidth={4}
        dot={{ r: 6 }}
        activeDot={{ r: 9 }}
      />

    </LineChart>
  </ResponsiveContainer>

</div>

{/* Model Performance */}

<div className="grid md:grid-cols-3 gap-6 mt-10">

  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="font-bold text-xl">
      Precision
    </h3>

    <h1 className="text-5xl font-bold text-blue-600 mt-4">
      93%
    </h1>

    <p className="text-gray-500 mt-3">
      Percentage of predicted pneumonia cases that were correct.
    </p>
  </div>

  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="font-bold text-xl">
      Recall
    </h3>

    <h1 className="text-5xl font-bold text-green-600 mt-4">
      91%
    </h1>

    <p className="text-gray-500 mt-3">
      Percentage of actual pneumonia cases detected by the model.
    </p>
  </div>

  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="font-bold text-xl">
      F1 Score
    </h3>

    <h1 className="text-5xl font-bold text-purple-600 mt-4">
      92%
    </h1>

    <p className="text-gray-500 mt-3">
      Balanced measure combining Precision and Recall.
    </p>
  </div>

</div>

</div>
</div>
</div>
  );
}

function Card({
  title,
  value,
  color,
  icon,
}) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`${color} text-white text-3xl w-16 h-16 rounded-xl flex items-center justify-center`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}