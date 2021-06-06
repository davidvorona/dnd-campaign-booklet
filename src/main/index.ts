import path from "path";
import { app, BrowserWindow } from "electron";
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
            console.log(err);
            if (err.code === "ERR_CONNECTION_REFUSED") {
                win.loadFile(path.resolve(__dirname, "index.html"));
            }
        });
    } else {
        win.loadFile(path.resolve(__dirname, "index.html"));
    }
}

app.whenReady().then(async () => {
    await createWindow();

    app.on("activate", function () {
        // macOS apps generally continue running even without any
        // windows open, and activating the app when no windows
        // are available should open a new one
        if (!BrowserWindow.getAllWindows().length) {
            createWindow();
        }
    });
});

// On Windows and Linux, exiting all windows generally
// quits an application entirely.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
