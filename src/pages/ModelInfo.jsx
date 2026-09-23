import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Brain,
  Database,
  Activity,
  Target,
  Cpu,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function ModelInfo() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold">
            AI Model Information
          </h1>

          <p className="text-gray-500 mb-8">
            Deep Learning model used for Pneumonia Detection from Chest X-Ray Images.
          </p>

          {/* Model Overview */}

          <div className="grid md:grid-cols-4 gap-6">

            <InfoCard
              icon={<Brain size={35} />}
              title="Model"
              value="DenseNet121"
              color="bg-blue-500"
            />

            <InfoCard
              icon={<Cpu size={35} />}
              title="Framework"
              value="TensorFlow"
              color="bg-green-500"
            />

            <InfoCard
              icon={<Target size={35} />}
              title="Accuracy"
              value="94.2%"
              color="bg-red-500"
            />

            <InfoCard
              icon={<Database size={35} />}
              title="Dataset"
              value="Chest X-Ray"
              color="bg-purple-500"
            />

          </div>

          {/* Performance */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                Model Performance
              </h2>

              <table className="w-full">

                <tbody>

                  <TableRow
                    name="Accuracy"
                    value="94.2%"
                  />

                  <TableRow
                    name="Precision"
                    value="93%"
                  />

                  <TableRow
                    name="Recall"
                    value="91%"
                  />

                  <TableRow
                    name="F1 Score"
                    value="92%"
                  />

                  <TableRow
                    name="AUC Score"
                    value="95%"
                  />

                </tbody>

              </table>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                Training Details
              </h2>

              <table className="w-full">

                <tbody>

                  <TableRow
                    name="Input Size"
                    value="224 × 224"
                  />

                  <TableRow
                    name="Epochs"
                    value="50"
                  />

                  <TableRow
                    name="Batch Size"
                    value="32"
                  />

                  <TableRow
                    name="Optimizer"
                    value="Adam"
                  />

                  <TableRow
                    name="Loss Function"
                    value="Binary Cross Entropy"
                  />

                </tbody>

              </table>

            </div>

          </div>

          {/* Workflow */}

          <div className="bg-white rounded-xl shadow p-8 mt-10">

            <h2 className="text-3xl font-bold mb-8">
              AI Prediction Workflow
            </h2>

            <div className="grid md:grid-cols-5 gap-6 text-center">

              <Workflow
                title="Upload X-Ray"
                color="bg-blue-100"
              />

              <Workflow
                title="Preprocessing"
                color="bg-yellow-100"
              />

              <Workflow
                title="DenseNet121"
                color="bg-green-100"
              />

              <Workflow
                title="Grad-CAM"
                color="bg-red-100"
              />

              <Workflow
                title="Prediction"
                color="bg-purple-100"
              />

            </div>

          </div>

          {/* Confusion Matrix */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                Confusion Matrix
              </h2>

              <img
                src="https://miro.medium.com/v2/resize:fit:900/1*Z54JgbS4DUwWSknhDCvNTQ.png"
                alt="Confusion Matrix"
                className="rounded-xl"
              />

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                ROC Curve
              </h2>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/ROC_space-2.png"
                alt="ROC Curve"
                className="rounded-xl"
              />

            </div>

          </div>

          {/* GradCAM */}

          <div className="bg-white rounded-xl shadow p-8 mt-10">

            <h2 className="text-3xl font-bold mb-5">
              Grad-CAM Explanation
            </h2>

            <p className="text-gray-600 leading-8">

              Grad-CAM (Gradient-weighted Class Activation Mapping)
              highlights the regions inside the chest X-ray that
              contributed the most towards the AI prediction.

              <br /><br />

              Red regions indicate the highest contribution,
              yellow indicates moderate importance,
              while blue regions have little influence on the decision.

            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div
        className={`${color} w-16 h-16 rounded-xl text-white flex items-center justify-center`}
      >
        {icon}
      </div>

      <h3 className="text-gray-500 mt-5">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

function TableRow({ name, value }) {
  return (
    <tr className="border-b">

      <td className="py-4 font-medium">
        {name}
      </td>

      <td className="py-4 text-right font-bold text-blue-600">
        {value}
      </td>

    </tr>
  );
}

function Workflow({
  title,
  color,
}) {
  return (
    <div className={`${color} rounded-xl p-6`}>

      <CheckCircle
        className="mx-auto mb-4 text-green-600"
        size={40}
      />

      <h3 className="font-bold">
        {title}
      </h3>

    </div>
  );
}