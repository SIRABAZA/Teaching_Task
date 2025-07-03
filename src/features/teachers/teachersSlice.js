import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTeachers,
  getAppointmentsByTeacherId,
  bookLesson,
} from "@/api/teachers";

export const fetchTeachers = createAsyncThunk("teachers/fetchAll", async () => {
  return await getAllTeachers();
});

export const fetchAppointmentsByTeacherId = createAsyncThunk(
  "teachers/fetchAppointmentsByTeacherId",
  async (teacherId) => {
    return await getAppointmentsByTeacherId(teacherId);
  }
);

export const bookLessonThunk = createAsyncThunk(
  "teachers/bookLesson",
  async ({ teacherId, appointment }) => {
    return await bookLesson(teacherId, appointment);
  }
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    list: [],
    appointments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all teachers
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch appointments by teacher id
      .addCase(fetchAppointmentsByTeacherId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointmentsByTeacherId.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointmentsByTeacherId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Book lesson (add appointment)
      .addCase(bookLessonThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookLessonThunk.fulfilled, (state, action) => {
        state.loading = false;
        // Update the teacher in the list
        const updatedTeacher = action.payload;
        const idx = state.list.findIndex((t) => t.id === updatedTeacher.id);
        if (idx !== -1) {
          state.list[idx] = updatedTeacher;
        }
        // Optionally update appointments if relevant
        if (state.appointments && updatedTeacher.appointments) {
          state.appointments = updatedTeacher.appointments;
        }
      })
      .addCase(bookLessonThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teachersSlice.reducer;
