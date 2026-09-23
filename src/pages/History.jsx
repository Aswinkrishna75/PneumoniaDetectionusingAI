import { useEffect, useState } from "react";
import {
  Search,
  Trash2,
  Eye,
  FileDown,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  getPredictions,
  deletePrediction,
} from "../utils/helpers";

export default function History() {
  const [predictions, setPredictions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPredictions();
  }, []);

  const loadPredictions = () => {
    setPredictions(getPredictions());
  };

  const removePrediction = (id) => {
    if (window.confirm("Delete this prediction?")) {
      deletePrediction(id);
      loadPredictions();
    }
  };

  const filteredPredictions = predictions.filter(
    (item) =>
      item.patientName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.patientId
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold">
            Prediction History
          </h1>

          <p className="text-gray-500 mb-8">
            View all previous AI predictions.
          </p>

          {/* Search */}

          <div className="bg-white rounded-xl shadow p-5 mb-6">

            <div className="flex items-center border rounded-xl px-4">

              <Search className="text-gray-400" />

              <input
                type="text"
                placeholder="Search Patient Name or ID..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          {/* Table */}

          <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-4">Patient ID</th>

                  <th>Name</th>

                  <th>Age</th>

                  <th>Gender</th>

                  <th>Date</th>

                  <th>Result</th>

                  <th>Confidence</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredPredictions.length === 0 ? (

                  <tr>

                    <td
                      colSpan="8"
                      className="text-center py-12 text-gray-500"
                    >
                      No Predictions Found
                    </td>

                  </tr>

                ) : (

                  filteredPredictions.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4">
                        {item.patientId}
                      </td>

                      <td>
                        {item.patientName}
                      </td>

                      <td>
                        {item.age}
                      </td>

                      <td>
                        {item.gender}
                      </td>

                      <td>
                        {item.date}
                      </td>

                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                           item.prediction === "PNEUMONIA"
                              ? "bg-red-100 text-red-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {item.prediction}
                        </span>

                      </td>

                      <td>
                        {item.confidence}%
                      </td>

                      <td>

                        <div className="flex gap-3 justify-center">

                          <button
                            className="text-blue-600 hover:text-blue-800"
                            title="View"
                            onClick={() =>
                              alert(
                                JSON.stringify(
                                  item,
                                  null,
                                  2
                                )
                              )
                            }
                          >
                            <Eye size={20} />
                          </button>

                          <button
                            className="text-green-600 hover:text-green-800"
                            title="Download"
                            onClick={() =>
                              window.print()
                            }
                          >
                            <FileDown size={20} />
                          </button>

                          <button
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                            onClick={() =>
                              removePrediction(item.id)
                            }
                          >
                            <Trash2 size={20} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
}