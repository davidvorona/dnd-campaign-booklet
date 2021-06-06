import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest, StrictEffect, ForkEffect } from "redux-saga/effects";
import storage from "../../services/storage";
import settingsActions from "../redux/settings_redux";

function* loadSetting(action: PayloadAction<number>): Generator<StrictEffect,void,dnd.Setting> {
    const id = action.payload;
    const setting = yield call(storage.getSetting, id);
    yield put(settingsActions.loadSettingSuccess(setting));
}

export default function settingsSagas(): ForkEffect[] {
    return [
        takeLatest(settingsActions.loadSetting.type, loadSetting)
    ];
}
