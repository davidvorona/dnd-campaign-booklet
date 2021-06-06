import { AnyAction } from "@reduxjs/toolkit";
import { put, takeLatest, StrictEffect, ForkEffect, take } from "redux-saga/effects";
import StartupActions from "../redux/startup_redux";
import settingsActions from "../redux/settings_redux";

function* startup(): Generator<StrictEffect,void,AnyAction> {
    try {
        const FIRST_SETTING_ID = 0;
        yield put(settingsActions.loadSetting(FIRST_SETTING_ID));
        const result = yield take([
            settingsActions.loadSettingSuccess.type,
            settingsActions.loadSettingFailure.type
        ]);
        if (result.type === settingsActions.loadSettingSuccess.type) {
            yield put(StartupActions.startupSuccess());
        } else {
            yield put(StartupActions.startupFailure());
        }
    } catch (err) {
        console.error(err);
        yield put(StartupActions.startupFailure());
    }
}

export default function startupSagas(): ForkEffect[] {
    return [
        takeLatest(StartupActions.startup.type, startup)
    ];
}
