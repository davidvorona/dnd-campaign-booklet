import React, { Component } from "react";
import process from "process";
import Screen from "../../components/screen";
import background1 from "../../../../assets/images/FantasyBackground1.jpg";
import background2 from "../../../../assets/images/FantasyBackground2.jpg";
import background3 from "../../../../assets/images/FantasyBackground3.jpg";
import background4 from "../../../../assets/images/FantasyBackground4.jpg";
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

type WelcomeScreenProps = Record<string,unknown>;
interface WelcomeScreenState {
    value: string
}

class WelcomeScreen extends Component<WelcomeScreenProps, WelcomeScreenState> {
    constructor(props:  WelcomeScreenProps) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        alert("Your setting has been created!");
        e.preventDefault();
    };

    render(): React.ReactNode {
        const { value } = this.state;
        return (
            <Screen style={bgStyles}>
                <div id="title-container">
                    <h1 id="welcome-title">DnD Campaign Booklet</h1>
                </div>
                <div id="new-setting-wrapper" className="flex-column">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id="new-setting-input"
                            name="new-setting"
                            type="text"
                            placeholder="Name your setting..."
                            value={value}
                            onChange={this.handleChange}
                            autoFocus
                        />
                    </form>
                </div>
                <div id="bottom-right-text" className="absolute flex-row">
                    <span>{versionText}</span>
                </div>
            </Screen>
        );
    }
}

export default WelcomeScreen;
