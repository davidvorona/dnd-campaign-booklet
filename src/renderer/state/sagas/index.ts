import { all, StrictEffect } from "redux-saga/effects";
import settingsSagas from "./settings_sagas";
import startupSagas from "./startup_sagas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RootSaga = Generator<StrictEffect,void,any>;

export default function* sagas(): RootSaga {
    yield all([
        ...startupSagas(),
        ...settingsSagas()
    ]);
}
