import React from "react";
import process from "process";
import styles from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const versions: any = {};
for (const dependency of ["chrome", "node", "electron"]) {
    versions[dependency] = process.versions[dependency];
}

const WelcomeScreen = (): JSX.Element => (
    <div style={styles.container} className="screen-container">
        <h1>Hello World!</h1>
        We are using Node.js<span id="node-version">{versions.node}</span>,
        Chromium <span id="chrome-version">{versions.chrome}</span>,
        and Electron <span id="electron-version">{versions.electron}</span>.
    </div>
);

export default WelcomeScreen;
