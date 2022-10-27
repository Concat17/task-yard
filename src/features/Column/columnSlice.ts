import { createSlice } from "@reduxjs/toolkit";

interface ColumnState {
  tasks: string[];
}

const initialState: ColumnState = {
  tasks: ["task1", "task2", "task3"],
};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    add: (state) => {
      state.tasks.push("taskNew");
    },
  },
});

export const { add } = columnSlice.actions;

export default columnSlice.reducer;
