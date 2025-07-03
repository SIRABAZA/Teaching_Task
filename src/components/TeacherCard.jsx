export default function TeacherCard({
  id,
  avatar,
  name,
  subject,
  years_of_experience,
  availability,
  average_rating,
  location,
  onRequestLesson,
}) {
  return (
    <div className="relative rounded-lg p-6 text-center w-64 max-md:w-full flex-shrink-0 border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white max-md:m-auto">
      {/* Teacher Image */}
      <div className="relative flex justify-center">
        <div className="rounded-full border-4 border-blue-100 p-1 bg-white overflow-hidden">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Teacher Info */}
      <div className="mt-4 space-y-1">
        <p className="text-lg font-bold text-gray-800 bg-white mb-2 py-2 px-6 rounded inline-block -rotate-3 shadow-sm border border-blue-200">
          {name || "Teacher Name"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>{years_of_experience}</strong> years of Experience
        </p>
        <p className="text-sm text-blue-700 font-semibold">
          Subject: <span className="text-gray-700">{subject}</span>
        </p>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              availability
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {availability ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center items-center mb-4 mt-2">
        <span className="text-yellow-400 text-lg">★</span>
        <span className="text-gray-600 text-sm ml-1">{average_rating}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button
          className={`cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition ${
            !availability && "pointer-events-none bg-gray-500"
          }`}
          onClick={() =>
            onRequestLesson &&
            onRequestLesson({
              id,
              avatar,
              name,
              subject,
              years_of_experience,
              availability,
              average_rating,
              location,
            })
          }
          disabled={!availability}
        >
          Request a Lesson
        </button>
      </div>
    </div>
  );
}
