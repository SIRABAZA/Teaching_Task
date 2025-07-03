import React, { useState } from "react";
import TeacherCard from "@/components/TeacherCard";
import Modal from "@/components/Modal";

const teachersData = [
  {
    id: 1,
    avatar:
      "https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-1/431167488_1480573709508496_3074156667619583962_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_ohc=fBIppvws8N0Q7kNvwEF38zg&_nc_oc=AdlFN-SJ6j1vLpDhhFHnWBVvaoLpMIl2WA4e-AD63HYl_BVxnlVe5zHG2x3WL-W_7YU&_nc_zt=24&_nc_ht=scontent.fcai19-12.fna&_nc_gid=QsEVtxY51G-F1aiH0oUneg&oh=00_AfM5UKfDEu-XgTLi9Uzs4MIYsf2kzSAOo9XulyO0HdgLzQ&oe=686C5FFF",
    name: "Dr. Amira Ahmed",
    subject: "Child Psychology",
    years_of_experience: "10",
    availability: true,
    average_rating: "4.8",
    location: "Egypt",
  },
  {
    id: 2,
    avatar: "https://placehold.co/200x200/ffe4e6/cccccc?text=Teacher",
    name: "Mr. John Smith",
    subject: "Mathematics",
    years_of_experience: "7",
    availability: false,
    average_rating: "4.5",
    location: "USA",
  },
  {
    id: 3,
    avatar: "https://placehold.co/200x200/dbeafe/cccccc?text=Teacher",
    name: "Ms. Sara Lee",
    subject: "English Literature",
    years_of_experience: "5",
    availability: true,
    average_rating: "4.9",
    location: "UK",
  },
  {
    id: 4,
    avatar: "https://placehold.co/200x200/fde68a/cccccc?text=Teacher",
    name: "Dr. Omar Khaled",
    subject: "Physics",
    years_of_experience: "12",
    availability: true,
    average_rating: "4.7",
    location: "Egypt",
  },
];

const uniqueSubjects = [...new Set(teachersData.map((t) => t.subject))];
const uniqueLocations = [...new Set(teachersData.map((t) => t.location))];

export default function Teacher() {
  const [filters, setFilters] = useState({
    subject: "",
    location: "",
    availability: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const filteredTeachers = teachersData.filter((teacher) => {
    const subjectMatch =
      !filters.subject || teacher.subject === filters.subject;
    const locationMatch =
      !filters.location || teacher.location === filters.location;
    const availabilityMatch =
      !filters.availability ||
      (filters.availability === "available" && teacher.availability) ||
      (filters.availability === "unavailable" && !teacher.availability);
    return subjectMatch && locationMatch && availabilityMatch;
  });

  const handleRequestLesson = (teacher) => {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedTeacher(null);
  };

  const handleModalSubmit = (formData) => {
    // You can handle the form data here (e.g., send to API)
    // Optionally, include selectedTeacher info
    console.log("Lesson request submitted:", {
      ...formData,
      teacher: selectedTeacher,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center drop-shadow-sm">
          Meet Our Teachers
        </h1>
        {/* Filter Toggle Button for Small Devices */}
        <div className="md:hidden flex justify-end mb-2">
          <button
            className="flex items-center gap-2 px-3 py-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition border border-blue-200"
            onClick={() => setShowFilters((v) => !v)}
            aria-label="Toggle filters"
          >
            {/* Filter Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h18m-16.5 6.75h15m-13.5 6.75h12"
              />
            </svg>
            <span className="font-medium">Filters</span>
          </button>
        </div>
        {/* Filter Bar */}
        <div
          className={`md:flex flex-col md:flex-row items-center justify-center gap-4 bg-white rounded-lg shadow p-4 mb-8 border border-blue-100 transition-all duration-300 overflow-hidden 
            ${
              showFilters
                ? "max-h-96 opacity-100 my-4"
                : "max-h-0 opacity-0 my-0"
            } md:max-h-full md:opacity-100
          `}
        >
          <select
            className="w-full sm:w-auto mb-2 sm:mb-0 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={filters.subject}
            onChange={(e) =>
              setFilters((f) => ({ ...f, subject: e.target.value }))
            }
          >
            <option value="">All Subjects</option>
            {uniqueSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <select
            className="w-full sm:w-auto mb-2 sm:mb-0 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={filters.location}
            onChange={(e) =>
              setFilters((f) => ({ ...f, location: e.target.value }))
            }
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select
            className="w-full sm:w-auto px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={filters.availability}
            onChange={(e) =>
              setFilters((f) => ({ ...f, availability: e.target.value }))
            }
          >
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                {...teacher}
                onRequestLesson={handleRequestLesson}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No teachers found for the selected filters.
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}
