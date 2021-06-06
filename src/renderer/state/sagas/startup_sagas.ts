import { AnyAction } from "@reduxjs/toolkit";
import { put, takeLatest, StrictEffect, ForkEffect, take } from "redux-saga/effects";
import startupActions from "../redux/startup_redux";
import settingsActions from "../redux/settings_redux";

function* startup(): Generator<StrictEffect,void,AnyAction> {
    const FIRST_SETTING_ID = 0;
    yield put(settingsActions.loadSetting(FIRST_SETTING_ID));
    const result = yield take([
        settingsActions.loadSettingSuccess.type,
        settingsActions.loadSettingFailure.type
    ]);
    if (result.type === settingsActions.loadSettingSuccess.type) {
        alert("Successfully loaded setting.");
        yield put(startupActions.setStartupComplete());
    } else {
        alert("Failed to load setting.");
    }
}

export default function startupSagas(): ForkEffect[] {
    return [
        takeLatest(startupActions.startup.type, startup)
    ];
}
