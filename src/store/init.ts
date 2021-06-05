import Store from "./store";
import SETTING_DEFAULTS from "../config/setting_defaults";

export const settingsStore = new Store({
    fileName: "settings",
    defaults: [SETTING_DEFAULTS]
});
