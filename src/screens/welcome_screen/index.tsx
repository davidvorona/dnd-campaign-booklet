import React from "react";
import process from "process";
import Screen from "../../components/screen";
import background1 from "../../../assets/images/FantasyBackground1.jpg";
import background2 from "../../../assets/images/FantasyBackground2.jpg";
import background3 from "../../../assets/images/FantasyBackground3.jpg";
import background4 from "../../../assets/images/FantasyBackground4.jpg";
import "./styles.css";

function pickBackground() {
    const bgs = [background1, background2, background3, background4];
    const which = Math.floor(Math.random() * bgs.length);
    return bgs[which];
}

const bgStyles = {
    background: `url(${pickBackground()}) no-repeat center center fixed`,
    backgroundSize: "cover"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const versions: any = {};
for (const dependency of ["chrome", "node", "electron"]) {
    versions[dependency] = process.versions[dependency];
}

const versionText = `Powered by Node.js ${versions.node},
Chromium ${versions.chrome}, and Electron ${versions.electron}.`;

const WelcomeScreen = (): JSX.Element => (
    <Screen style={bgStyles}>
        <div id="title-container">
            <h1 id="welcome-title">DnD Campaign Booklet</h1>
        </div>
        <div id="new-setting-wrapper" className="flex-column">
            <input
                id="new-setting-input"
                placeholder="Create a setting..."
            />
        </div>
        <div id="bottom-right-text" className="absolute flex-row">
            <span>{versionText}</span>
        </div>
    </Screen>
);

export default WelcomeScreen;
