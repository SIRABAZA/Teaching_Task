export default function TeacherCard() {
  const teacher = {
    id: 1,
    avatar: "https://placehold.co/200x200/e2e8f0/cccccc?text=Teacher",
    name: "Child Psychology/Dr. Sarah Johnson",
    average_rating: "4.8",
    video: "https://example.com/video",
    specialization: "Child Development",
  };

  return (
    <div className="relative rounded-lg p-6 text-center w-64 flex-shrink-0 border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
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
      <div className="mt-4">
        <p className="text-lg font-bold text-gray-800 bg-white mb-2 py-2 px-6 rounded inline-block -rotate-3 shadow-sm border border-blue-200">
          {teacher.name.split("/")[1] || "Teacher Name"}
        </p>
        <p className="text-sm text-gray-600">
          {teacher.name.split("/")[0] || "Specialization"}
        </p>
        <p className="text-xs text-gray-500 mb-2">Based in Egypt</p>
      </div>

      {/* Rating */}
      <div className="flex justify-center items-center mb-4">
        <span className="text-yellow-400 text-lg">★</span>
        <span className="text-gray-600 text-sm ml-1">
          {teacher.average_rating}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
          onClick={() => console.log("View video clicked")}
        >
          View Video
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
          onClick={() => console.log(`Navigating to teacher ${teacher.id}`)}
        >
          Book Session
        </button>
      </div>
    </div>
  );
}
