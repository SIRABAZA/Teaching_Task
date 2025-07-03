import React, { useState, useEffect } from "react";
import TeacherCard from "@/components/TeacherCard";
import Modal from "@/components/Modal";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTeachers,
  bookLessonThunk,
} from "@/features/teachers/teachersSlice";
import Spinner from "@/components/Spinner";

function formatTimeTo12Hour(timeStr) {
  const [hour, minute, second] = timeStr.split(":");
  let h = parseInt(hour, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${minute}${second ? ":" + second : ""} ${ampm}`;
}

export default function Teacher() {
  const dispatch = useDispatch();
  const {
    list: teachers,
    loading,
    error,
  } = useSelector((state) => state.teachers);

  const [filters, setFilters] = useState({
    subject: "all",
    location: "all",
    availability: "all",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  // Get unique subjects and locations from teachers list
  const uniqueSubjects = [...new Set(teachers.map((t) => t.subject))];
  const uniqueLocations = [...new Set(teachers.map((t) => t.location))];

  const filteredTeachers = teachers.filter((teacher) => {
    const subjectMatch =
      filters.subject === "all" ||
      !filters.subject ||
      teacher.subject === filters.subject;
    const locationMatch =
      filters.location === "all" ||
      !filters.location ||
      teacher.location === filters.location;
    const availabilityMatch =
      filters.availability === "all" ||
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

  const handleBookLesson = (formData) => {
    if (!selectedTeacher) return;
    const appointment = {
      id: Date.now(),
      studentName: formData.studentName,
      date: formData.preferredDate
        ? formData.preferredDate.toLocaleDateString()
        : "",
      time: formatTimeTo12Hour(formData.preferredTime),
      message: formData.message,
    };
    dispatch(bookLessonThunk({ teacherId: selectedTeacher.id, appointment }));
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
          <Select
            value={filters.subject}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, subject: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-auto mb-2 sm:mb-0">
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {uniqueSubjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filters.location}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, location: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-auto mb-2 sm:mb-0">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {uniqueLocations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filters.availability}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, availability: value }))
            }
          >
            <SelectTrigger className="w-full sm:w-auto">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Teacher Cards Grid */}
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="text-center py-12 text-red-500 font-semibold">
            {error}
          </div>
        ) : (
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
        )}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onBookLesson={handleBookLesson}
      />
    </div>
  );
}
