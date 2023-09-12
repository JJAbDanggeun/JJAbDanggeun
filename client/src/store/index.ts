import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./exampleSlice";

export const store = configureStore({
	reducer: {
		exampleSlice: exampleSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
