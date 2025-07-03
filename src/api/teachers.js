import axios from "axios";

const BASE_URL = "http://localhost:3000/teachers";

export async function getAllTeachers() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function getAppointmentsByTeacherId(teacherId) {
  const response = await axios.get(`${BASE_URL}/${teacherId}`);
  return response.data.appointments || [];
}

export async function bookLesson(teacherId, appointment) {
  const response = await axios.get(`${BASE_URL}/${teacherId}`);
  const updatedAppointments = [
    ...(response.data.appointments || []),
    appointment,
  ];
  const patchResponse = await axios.patch(`${BASE_URL}/${teacherId}`, {
    appointments: updatedAppointments,
  });
  return patchResponse.data;
}
