import axios from "axios";

const BASE_URL = "http://localhost:3000/teachers";

export async function getAllTeachers() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function getTeacherById(id) {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

export async function createTeacher(teacher) {
  const response = await axios.post(BASE_URL, teacher);
  return response.data;
}
