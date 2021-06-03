import path from "path";
import { app, BrowserWindow } from "electron";

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // resolves to index.tsx/js file
            preload: path.join(__dirname, "")
        }
    });
    win.loadFile("./static/index.html");
}

app.whenReady().then(() => {
    createWindow();

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
