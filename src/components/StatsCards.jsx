import {
  Activity,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Predictions",
      value: "158",
      subText: "View All",
      icon: Activity,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Normal Cases",
      value: "89",
      subText: "56.3%",
      icon: CheckCircle,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Pneumonia Cases",
      value: "69",
      subText: "43.7%",
      icon: AlertTriangle,
      bg: "bg-red-100",
      color: "text-red-600",
    },
    {
      title: "Model Accuracy",
      value: "94.2%",
      subText: "Overall Accuracy",
      icon: TrendingUp,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              p-6
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="flex items-center justify-between">
              {/* Left */}
              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mt-2">
                  {item.value}
                </h2>

                <p
                  className={`mt-3 text-sm font-semibold ${item.color}`}
                >
                  {item.subText}
                </p>
              </div>

              {/* Right */}
              <div
                className={`
                  w-16 h-16
                  rounded-full
                  flex items-center justify-center
                  ${item.bg}
                `}
              >
                <Icon
                  size={32}
                  className={item.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}