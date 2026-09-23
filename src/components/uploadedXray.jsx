export default function UploadedXray({
  image,
  patientName,
  patientId,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h2 className="text-2xl font-bold mb-4">
        Uploaded X-Ray
      </h2>

      {image ? (
        <img
          src={image}
          alt="Uploaded X-Ray"
          className="w-full h-[350px] rounded-xl object-contain border"
        />
      ) : (
        <div className="w-full h-[350px] rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
          No X-Ray Uploaded
        </div>
      )}

      <div className="mt-4 bg-gray-50 rounded-xl p-4">

        <div className="flex justify-between py-2">
          <span>Patient ID</span>
          <span>{patientId || "--"}</span>
        </div>

        <div className="flex justify-between py-2">
          <span>Patient Name</span>
          <span>{patientName || "--"}</span>
        </div>

      </div>
    </div>
  );
}