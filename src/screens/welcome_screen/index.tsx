import React from "react";
import process from "process";
import Screen from "../../components/screen";
import styles from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const versions: any = {};
for (const dependency of ["chrome", "node", "electron"]) {
    versions[dependency] = process.versions[dependency];
}

const WelcomeScreen = (): JSX.Element => (
    <Screen style={styles.screenBackground}>
        <div style={styles.titleContainer}>
            <h1 className="title">DnD Campaign Booklet</h1>
        </div>
        <div className="absolute flex-row" style={styles.bottomRightText}>
            We are using Node.js <span id="node-version">{versions.node}</span>,
            Chromium <span id="chrome-version">{versions.chrome}</span>,
            and Electron <span id="electron-version">{versions.electron}</span>.
        </div>
    </Screen>
);

export default WelcomeScreen;
