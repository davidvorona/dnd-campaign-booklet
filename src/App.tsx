import process from "process";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const versions: any = {};
for (const dependency of ["chrome", "node", "electron"]) {
    versions[dependency] = process.versions[dependency];
}

export default function App(): JSX.Element {
    return (
        <div>
            <h1>Hello World!</h1>
            We are using Node.js<span id="node-version">{versions.node}</span>,
            Chromium <span id="chrome-version">{versions.chrome}</span>,
            and Electron <span id="electron-version">{versions.electron}</span>.
        </div>
    );
}
