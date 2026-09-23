import { Eye, Download } from "lucide-react";

export default function RecentPredictions() {
  const predictions = [
    {
      id: "P001",
      image: "https://storage.googleapis.com/kagglesdsdata/datasets/5839/18613/images_001/images/00000001_001.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20260620%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260620T053612Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=85aa40eec2f6ac98f314fd5e3ec319fd17da1e56f174c9a12c06f9f5d7c2d68fa7ccf90869329e3f186d133c6a738730ff105a0ccddd7acadb43a77fc28b53095a3d309ae65cf4232c86f398c59df46d55414ec6609d6da2665d0cc194b335828b251da66355452543de8508fc1bc2b126f9830f4ac0db9c92e98afb8f16d47b09d237056670076aa542d79cfa2d2ffc2da29baf6bccd7419ff5a57b996ae61a930725775034bbb1f227ce37c8fd582b6619d6eaa2df4afc4a084a64a1212e2bc76f9f768050a90af5add67ce13ca2f1c1272b36b1970c38fcb3c0ca67ae3da2b7f5abc2464d03f89641ca95e21d342185bec22e3459b915152c9d6b1f582445",
      result: "Pneumonia",
      confidence: "92.4%",
      risk: "High",
      date: "20 Jun 2026",
      status: "Completed",
    },
    {
      id: "P002",
      image: "https://storage.googleapis.com/kagglesdsdata/datasets/5839/18613/images_001/images/00000003_003.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20260620%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260620T053612Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=9fa16d3b22d1c13d2017003ede915f5824a0be51f3cec5bc76064482b0f6e14a475a550ffcbb44b340e957dc0f82d5f33b782b4b92bfd0a75ef194be0afaea9ffcd67604792d9a25817838a085dbace4775e892e9ba2341b280e0385414c47994892aa34f976003df12bc1fd64c467a5711d6386fa637673f1df77c5593a0d3bfd989bd7328fd69f648a8447da98d01b4be8560d537d20fec5838d74ff5be774597f741168919e71fc4cced5f1e97335b88ebb72541e1d7212cd9a5f9f00d8e29bf27040e18650de01c4cd0c7e1f54e46a950af3d33013068ac24e8f8694afc1606ad920a7a5388c2994ede91e644f76aa63816ea4e14dc9a10061c0105572b2",
      result: "Normal",
      confidence: "87.1%",
      risk: "Low",
      date: "19 Jun 2026",
      status: "Completed",
    },
    {
      id: "P003",
      image: "https://storage.googleapis.com/kagglesdsdata/datasets/5839/18613/images_001/images/00000003_003.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20260620%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260620T053612Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=9fa16d3b22d1c13d2017003ede915f5824a0be51f3cec5bc76064482b0f6e14a475a550ffcbb44b340e957dc0f82d5f33b782b4b92bfd0a75ef194be0afaea9ffcd67604792d9a25817838a085dbace4775e892e9ba2341b280e0385414c47994892aa34f976003df12bc1fd64c467a5711d6386fa637673f1df77c5593a0d3bfd989bd7328fd69f648a8447da98d01b4be8560d537d20fec5838d74ff5be774597f741168919e71fc4cced5f1e97335b88ebb72541e1d7212cd9a5f9f00d8e29bf27040e18650de01c4cd0c7e1f54e46a950af3d33013068ac24e8f8694afc1606ad920a7a5388c2994ede91e644f76aa63816ea4e14dc9a10061c0105572b2",
      result: "Pneumonia",
      confidence: "95.8%",
      risk: "High",
      date: "18 Jun 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Recent Predictions
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-4 text-left">Patient ID</th>
              <th className="text-left">X-Ray</th>
              <th className="text-left">Result</th>
              <th className="text-left">Confidence</th>
              <th className="text-left">Risk</th>
              <th className="text-left">Date</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium">
                  {item.id}
                </td>

                <td>
                  <img
                    src={item.image}
                    alt=""
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </td>

                <td>
                  <span
                    className={`font-semibold ${
                      item.result === "Pneumonia"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.result}
                  </span>
                </td>

                <td>{item.confidence}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.risk === "High"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.risk}
                  </span>
                </td>

                <td>{item.date}</td>

                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={18} />
                    </button>

                    <button className="text-green-600 hover:text-green-800">
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}