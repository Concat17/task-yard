import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Column } from "../../types";

import type { RootState } from "../../app/store";
import { generateId } from "../../utils";
interface BoardState {
  columns: Column[];
}

const generateTaskId = generateId("task_");

const initialState: BoardState = {
  columns: [
    {
      title: "test",
      tasks: [
        { title: "to do", id: generateTaskId() },
        { title: "to do2", id: generateTaskId() },
        { title: "3", id: generateTaskId() },
        { title: "4", id: generateTaskId() },
      ],
    },
    {
      title: "test2",
      tasks: [{ title: "to do32", id: generateTaskId() }],
    },
  ],
};

const findColumnByTitle = (state: BoardState, title: string) =>
  state.columns.find((c) => c.title === title);

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

      const column = findColumnByTitle(state, columnTitle);

      if (!column) return;

      column.title = newTitle;
    },

    addTask: (
      state,
      action: PayloadAction<{ columnTitle: string; taskTitle: string }>
    ) => {
      const { columnTitle, taskTitle } = action.payload;

      const column = findColumnByTitle(state, columnTitle);

      if (!column) return;

      column.tasks.push({ title: taskTitle, id: generateTaskId() });
    },

    removeTask: (
      state,
      action: PayloadAction<{ columnTitle: string; taskTitle: string }>
    ) => {
      const { columnTitle, taskTitle } = action.payload;

      const column = findColumnByTitle(state, columnTitle);

      if (!column) return;

      column.tasks = column.tasks.filter((t) => t.title !== taskTitle);
    },

    // in order to swap tasks I find task by id,
    // delete from it column and add to the new one
    swapTasks: (
      state,
      action: PayloadAction<{
        activeContainerId: string;
        overContainerId: string;
        activeId: string;
      }>
    ) => {
      const { activeContainerId, overContainerId, activeId } = action.payload;

      const activeColumn = findColumnByTitle(state, activeContainerId);
      const overColumn = findColumnByTitle(state, overContainerId);

      if (!activeColumn || !overColumn) return;

      const activeTask = activeColumn.tasks.find((t) => t.id === activeId);

      if (!activeTask) return;

      activeColumn.tasks = activeColumn.tasks.filter((t) => t.id !== activeId);
      overColumn.tasks.push(activeTask);
    },
  },
});

export const {
  addTask,
  addColumn,
  deleteColumn,
  renameColumn,
  removeTask,
  swapTasks,
} = boardSlice.actions;

export const selectColumns = (state: RootState) => state.board.columns;
export const selectSelectColumnByTitle = (state: RootState, title: string) =>
  state.board.columns.find((c) => c.title === title);
export const findTaskById = (state: RootState, taskId: string) => {
  let task = null;
  for (let i = 0; i < state.board.columns.length; i++) {
    for (let j = 0; j < state.board.columns[i].tasks.length; j++) {
      if (state.board.columns[i].tasks[j].id === taskId) {
        task = state.board.columns[i].tasks[j];
        break;
      }
    }
  }

  return task;
};
export default boardSlice.reducer;
