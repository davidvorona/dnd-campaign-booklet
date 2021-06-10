/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "\action\" }]*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import SETTING_DEFAULTS from "../../../config/setting_defaults";

interface SettingsState {
    isLoading: boolean,
    settings: dnd.Setting[],
    currentSetting: dnd.Setting
}

const initialState: SettingsState = {
    isLoading: false,
    settings: [],
    currentSetting: SETTING_DEFAULTS
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        loadSetting(state, action: PayloadAction<number>) {
            state.isLoading = true;
        },
        loadSettingSuccess(state, action: PayloadAction<dnd.Setting>) {
            state.isLoading = false;
            state.currentSetting = action.payload;
        },
        loadSettingFailure(state) {
            state.isLoading = false;
        }
    }
});

const current = (state: RootState): SettingsState => state.settings as SettingsState;
export const selectors = {
    getCurrentSetting: (state: RootState): dnd.Setting => current(state).currentSetting
};

export const reducer = settingsSlice.reducer;

export default settingsSlice.actions;
