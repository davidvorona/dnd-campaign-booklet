import { ipcRenderer } from "electron";
import IPC_CHANNELS from "../../config/ipc_channels";

const IPCStorageInterface = {
    async getSetting(id: number): Promise<dnd.Setting> {
        try {
            const result = await ipcRenderer.invoke(IPC_CHANNELS.GET_SETTING, id);
            return result;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
};

export default IPCStorageInterface;
