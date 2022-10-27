import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Column } from "../../types";

import type { RootState } from "../../app/store";
interface BoardState {
  columns: Column[];
}

const initialState: BoardState = {
  columns: [{ title: "test" }],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<string>) => {
      state.columns.push({ title: action.payload });
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((c) => c.title !== action.payload);
    },
  },
});

export const { addColumn, deleteColumn } = boardSlice.actions;

export const selectColumns = (state: RootState) => state.board.columns;

export default boardSlice.reducer;
