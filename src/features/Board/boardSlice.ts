import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Column } from "../../types";

import type { RootState } from "../../app/store";
interface BoardState {
  columns: Column[];
}

const initialState: BoardState = {
  columns: [
    { title: "test", tasks: [{ title: "to do" }, { title: "to do2" }] },
    { title: "test3", tasks: [{ title: "to do" }] },
  ],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<string>) => {
      state.columns.push({ title: action.payload, tasks: [] });
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((c) => c.title !== action.payload);
    },
    renameColumn: (
      state,
      action: PayloadAction<{ columnTitle: string; newTitle: string }>
    ) => {
      const { columnTitle, newTitle } = action.payload;

      const column = state.columns.find((c) => c.title === columnTitle);

      if (!column) return;

      column.title = newTitle;
    },
    addTask: (
      state,
      action: PayloadAction<{ columnTitle: string; taskTitle: string }>
    ) => {
      const { columnTitle, taskTitle } = action.payload;

      const column = state.columns.find((c) => c.title === columnTitle);

      if (!column) return;

      column.tasks.push({ title: taskTitle });
    },
    removeTask: (
      state,
      action: PayloadAction<{ columnTitle: string; taskTitle: string }>
    ) => {
      const { columnTitle, taskTitle } = action.payload;

      const column = state.columns.find((c) => c.title === columnTitle);

      if (!column) return;

      column.tasks = column.tasks.filter((t) => t.title !== taskTitle);
    },
  },
});

export const { addTask, addColumn, deleteColumn, renameColumn, removeTask } =
  boardSlice.actions;

export const selectColumns = (state: RootState) => state.board.columns;
export const selectSelectColumnByTitle = (state: RootState, title: string) =>
  state.board.columns.find((c) => c.title === title);

export default boardSlice.reducer;
