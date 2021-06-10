import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest, StrictEffect, ForkEffect } from "redux-saga/effects";
import storage from "../../services/storage";
import SettingSetup from "../../services/setting_setup";
import settingsActions from "../redux/settings_redux";

function* loadSetting(action: PayloadAction<number>): Generator<StrictEffect,void,dnd.Setting> {
    try {
        const id = action.payload;
        const setting = yield call(storage.getSetting, id);
        const settingSetup = new SettingSetup({ setting });
        const setupStep = settingSetup.getStep();
        yield put(settingsActions.loadSettingSuccess({ ...setting, setupStep }));
    } catch (err) {
        console.error(err);
        yield put(settingsActions.loadSettingFailure());
    }
}

export default function settingsSagas(): ForkEffect[] {
    return [
        takeLatest(settingsActions.loadSetting.type, loadSetting)
    ];
}
