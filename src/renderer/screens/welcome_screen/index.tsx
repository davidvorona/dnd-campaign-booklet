import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import process from "process";
import { RootState } from "../../state/store";
import Screen from "../../components/screen";
import WaitForStartup from "../../containers/wait_for_startup";
import ViewBox from "../../components/view_box";
import { selectors as settingsSelectors } from "../../state/redux/settings_redux";
import background1 from "../../../../assets/images/FantasyBackground1.jpg";
import background2 from "../../../../assets/images/FantasyBackground2.jpg";
import background3 from "../../../../assets/images/FantasyBackground3.jpg";
import background4 from "../../../../assets/images/FantasyBackground4.jpg";
import "./styles.css";

/** Helpers */
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
/** */

type WelcomeScreenProps = PropsFromRedux & typeof WelcomeScreen.defaultProps;

interface WelcomeScreenState {
    value: string
}

class WelcomeScreen extends Component<WelcomeScreenProps, WelcomeScreenState> {
    static defaultProps = {
        currentSetting: {} as dnd.Setting
    };
    
    state: WelcomeScreenState = {
        value: ""
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        alert("Your setting has been created!");
        e.preventDefault();
    };

    hasCurrentSetting = (): boolean => {
        const { currentSetting } = this.props;
        return Object.keys(currentSetting).length > 0;
    };

    render(): React.ReactNode {
        const { value } = this.state;
        const { currentSetting } = this.props;
        const showCurrentSetting = this.hasCurrentSetting();
        return (
            <Screen style={bgStyles}>
                {showCurrentSetting
                    ? (
                        <>
                            <ViewBox>
                                <div id="current-setting-wrapper" className="flex-column">
                                    {JSON.stringify(currentSetting)}
                                </div>
                            </ViewBox>
                        </>
                    ) : (
                        <>
                            <div id="title-container">
                                <h1 id="welcome-title">DnD Campaign Booklet</h1>
                            </div>
                            <WaitForStartup>
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
                            </WaitForStartup>
                        </>
                    )
                }
                <div id="bottom-right-text" className="absolute flex-row">
                    <span>{versionText}</span>
                </div>
            </Screen>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    currentSetting: settingsSelectors.getCurrentSetting(state)
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(WelcomeScreen);
