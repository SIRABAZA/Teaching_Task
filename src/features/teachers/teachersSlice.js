import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTeachers, getTeacherById, createTeacher } from "@/api/teachers";

export const fetchTeachers = createAsyncThunk("teachers/fetchAll", async () => {
  return await getAllTeachers();
});

export const fetchTeacherById = createAsyncThunk(
  "teachers/fetchById",
  async (id) => {
    return await getTeacherById(id);
  }
);

export const addTeacher = createAsyncThunk("teachers/add", async (teacher) => {
  return await createTeacher(teacher);
});

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    list: [],
    selected: null,
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
      // Fetch teacher by id
      .addCase(fetchTeacherById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherById.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchTeacherById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add teacher
      .addCase(addTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teachersSlice.reducer;
