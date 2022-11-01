import { configureStore } from "@reduxjs/toolkit";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import boardReducer from "../features/Board/boardSlice";
import columnReducer from "../features/Column/columnSlice";

const middleware = import.meta.env.DEV
  ? // eslint-disable-next-line @typescript-eslint/no-var-requires
    [reduxImmutableStateInvariant()]
  : [];

export const store = configureStore({
  reducer: {
    board: boardReducer,
    columns: columnReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
