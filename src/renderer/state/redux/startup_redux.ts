/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "\action\" }]*/
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface StartupState {
    isStartingUp: boolean,
    isComplete: boolean
}

const initialState: StartupState = {
    isStartingUp: true,
    isComplete: false
};

export const startupSlice = createSlice({
    name: "startup",
    initialState,
    reducers: {
        startup(state) {
            state.isStartingUp = true;
        },
        setStartupComplete(state) {
            state.isComplete = true;
        }
    }
});

const current = (state: RootState): StartupState => state.startup as StartupState;
export const selectors = {
    getIsComplete: (state: RootState): boolean => current(state).isComplete
};

export const reducer = startupSlice.reducer;

export default startupSlice.actions;
