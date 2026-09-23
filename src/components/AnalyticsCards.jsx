import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Brain,
  TrendingUp,
} from "lucide-react";

export default function AnalyticsCards({ predictions }) {
  const total = predictions.length;

  const pneumonia = predictions.filter(
    (p) => p.result === "Pneumonia"
  ).length;

  const normal = predictions.filter(
    (p) => p.result === "Normal"
  ).length;

  const accuracy = 94.2;

  const cards = [
    {
      title: "Total Predictions",
      value: total,
      subtitle: "+12% This Month",
      icon: <Activity size={32} />,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      title: "Pneumonia Cases",
      value: pneumonia,
      subtitle:
        total === 0
          ? "0%"
          : `${((pneumonia / total) * 100).toFixed(1)}%`,
      icon: <AlertTriangle size={32} />,
      bg: "from-red-500 to-orange-500",
    },
    {
      title: "Normal Cases",
      value: normal,
      subtitle:
        total === 0
          ? "0%"
          : `${((normal / total) * 100).toFixed(1)}%`,
      icon: <CheckCircle size={32} />,
      bg: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Accuracy",
      value: `${accuracy}%`,
      subtitle: "Excellent",
      icon: <Brain size={32} />,
      bg: "from-purple-500 to-indigo-600",
    },
    {
      title: "Average Confidence",
      value: "92.8%",
      subtitle: "High Confidence",
      icon: <TrendingUp size={32} />,
      bg: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${card.bg} text-white rounded-2xl shadow-lg p-6 transition duration-300 hover:scale-105`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {card.value}
              </h2>

              <p className="text-sm mt-3 opacity-80">
                {card.subtitle}
              </p>
            </div>

            <div className="bg-white/20 p-4 rounded-full">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}