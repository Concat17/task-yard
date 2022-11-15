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
    addTaskNew: (state, action: PayloadAction<string>) => {
      state.tasks.push({ title: action.payload });
    },
  },
});

export const { addTaskNew } = columnSlice.actions;

export default columnSlice.reducer;
