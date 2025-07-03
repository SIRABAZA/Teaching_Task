export default function Modal({ isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500/20 bg-opacity-70 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-lg relative">
          {/* Modal header */}
          <div className="bg-gradient-to-r from-primary-400 to-primary-600 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Expert Profile</h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 text-2xl focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Modal content */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
                <p className="text-lg text-gray-600 mb-2">
                  Education Consultant
                </p>
                <p className="text-gray-500">
                  Specialization: Learning Strategies
                </p>
                <p className="text-gray-500">Experience: 5+ years</p>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="relative">
                <img
                  src="../assets/react.svg"
                  alt="John Smith"
                  className="w-32 h-32 rounded-full border-4 border-primary-100 object-cover shadow-md"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-400 text-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">5★</span>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 border-t border-gray-200">
              <button
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200 font-medium flex-1"
                onClick={closeModal}
              >
                Close
              </button>

              <button className="px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-600 text-black rounded-lg hover:from-primary-500 hover:to-primary-700 transition duration-200 shadow-md hover:shadow-lg font-medium flex-1">
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
