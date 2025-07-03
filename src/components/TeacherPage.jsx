export default function TeacherPage({ expert }) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 lg:p-12 bg-white rounded-xl shadow-md max-w-6xl mx-auto">
      {/* Teacher Image Section */}
      <div className="flex flex-col items-center w-full lg:w-auto">
        <div className="relative group">
          <div className="rounded-full border-4 border-blue-100 p-1 bg-white overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src={
                expert?.avatar ||
                "https://placehold.co/300x300/e2e8f0/cccccc?text=Teacher"
              }
              alt={expert?.name || "Expert"}
              className="w-64 h-64 object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
            <span className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
              {expert?.name?.split("/")[1] || "Expert Name"}
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">
            {expert?.name?.split("/")[0] || "Specialization"}
          </p>
          <p className="text-sm text-gray-500 mb-3">Based in Egypt</p>
          <div className="flex justify-center items-center">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-gray-700 font-bold ml-1">
              {expert?.average_rating || "5.0"}
            </span>
            <span className="text-gray-500 text-sm ml-1">(25 reviews)</span>
          </div>
        </div>
      </div>

      {/* Teacher Info Section */}
      <div className="flex-1">
        <div className="mb-6">
          <span className="inline-block bg-blue-600 text-white font-bold py-1 px-4 rounded-md transform -rotate-3 shadow-md">
            Our Experts
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-4 mb-6">
            ChildSkills Professional Team
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            {expert?.summary ||
              "Our expert brings years of experience in child education and development..."}
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-800 font-medium">
              {expert?.ilo ||
                "Specialized in personalized learning approaches and child psychology"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Book a Session
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
