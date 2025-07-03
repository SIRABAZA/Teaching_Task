import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import TeacherPage from "./components/TeacherPage";
import TeacherCard from "./components/TeacherCard";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <Hero />
      <div className="mx-auto text-center py-5">
        {" "}
        <button
          className="px-6 py-3 bg-blue-400 cursor-pointer hover:bg-blue-600 duration-300"
          onClick={setIsOpen}
        >
          Toggle Modal
        </button>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <TeacherCard />
      {/* <TeacherPage /> */}
      <Footer />
    </>
  );
}
export default App;
