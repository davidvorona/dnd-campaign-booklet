import path from "path";
import { app, BrowserWindow } from "electron";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
} from "electron-devtools-installer";
import "./storage/init";

const isDevelopment = process.env.NODE_ENV === "development";

async function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    if(isDevelopment) {
        win.loadURL("http://localhost:8080").catch((err) => {
            if (err.code === "ERR_CONNECTION_REFUSED") {
                const indexFilePath = path.resolve(__dirname, "index.html");
                console.log(`Using '${indexFilePath}'`);
                win.loadFile(indexFilePath);
            } else {
                console.error(err);
            }
        });
    } else {
        win.loadFile(path.resolve(__dirname, "index.html"));
    }
}

app.whenReady().then(async () => {
    try {
        await createWindow();

        if (isDevelopment) {
            // these options fix issue with extensions
            const fixOpts = { loadExtensionOptions: { allowFileAccess: true } };
            const extensions = await Promise.all([
                installExtension(REDUX_DEVTOOLS, fixOpts),
                installExtension(REACT_DEVELOPER_TOOLS, fixOpts)
            ]);
            console.log(`Loaded extensions: ${extensions.join(", ")}`);
        }

        app.on("activate", function () {
            // macOS apps generally continue running even without any
            // windows open, and activating the app when no windows
            // are available should open a new one
            if (!BrowserWindow.getAllWindows().length) {
                createWindow();
            }
        });
    } catch (err) {
        console.error(err);
        app.quit();
    }
});

// On Windows and Linux, exiting all windows generally
// quits an application entirely.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
