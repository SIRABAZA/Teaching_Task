export default function TeacherCard() {
  const teacher = {
    id: 1,
    avatar:
      "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-1/431167488_1480573709508496_3074156667619583962_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_ohc=fBIppvws8N0Q7kNvwEF38zg&_nc_oc=AdlFN-SJ6j1vLpDhhFHnWBVvaoLpMIl2WA4e-AD63HYl_BVxnlVe5zHG2x3WL-W_7YU&_nc_zt=24&_nc_ht=scontent.fcai19-12.fna&_nc_gid=QsEVtxY51G-F1aiH0oUneg&oh=00_AfM5UKfDEu-XgTLi9Uzs4MIYsf2kzSAOo9XulyO0HdgLzQ&oe=686C5FFF",
    name: "Dr. Amira Ahmed",
    subject: "Child Psychology",
    years_of_experience: "10",
    availability: true,
    average_rating: "4.8",
    location: "Egypt",
  };

  return (
    <div className="relative rounded-lg p-6 text-center w-72 flex-shrink-0 border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white max-md:m-auto">
      {/* Teacher Image */}
      <div className="relative flex justify-center">
        <div className="rounded-full border-4 border-blue-100 p-1 bg-white overflow-hidden">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Teacher Info */}
      <div className="mt-4 space-y-1">
        <p className="text-lg font-bold text-gray-800 bg-white mb-2 py-2 px-6 rounded inline-block -rotate-3 shadow-sm border border-blue-200">
          {teacher.name || "Teacher Name"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>{teacher.years_of_experience}</strong> years of Experience
        </p>
        <p className="text-sm text-blue-700 font-semibold">
          Subject: <span className="text-gray-700">{teacher.subject}</span>
        </p>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              teacher.availability
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {teacher.availability ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center items-center mb-4 mt-2">
        <span className="text-yellow-400 text-lg">★</span>
        <span className="text-gray-600 text-sm ml-1">
          {teacher.average_rating}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
          onClick={() => console.log(`Navigating to teacher ${teacher.id}`)}
        >
          Request a Lesson
        </button>
      </div>
    </div>
  );
}
