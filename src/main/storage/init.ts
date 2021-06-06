import { ipcMain } from "electron";
import Storage from "./index";
import SETTING_DEFAULTS from "../../config/setting_defaults";
import IPC_CHANNELS from "../../config/ipc_channels";

export const settingsStorage = new Storage({
    fileName: "settings",
    defaults: [SETTING_DEFAULTS]
});

ipcMain.handle(IPC_CHANNELS.GET_SETTING, (event, id) => {
    return settingsStorage.get(id);
});
