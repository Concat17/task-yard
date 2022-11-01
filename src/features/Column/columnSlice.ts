import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "../../types";

interface ColumnState {
  tasks: Task[];
}

const initialState: ColumnState = {
  tasks: [{ title: "task1" }],
};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      // state.columns.push({ title: action.payload });
      console.log("add", state);
      state.tasks.push({ title: action.payload });
    },
  },
});

export const { addTask } = columnSlice.actions;

export default columnSlice.reducer;
