import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../state/store";
import { selectors as startupSelectors } from "../state/redux/startup_redux";

type WaitForStartupProps = PropsFromRedux & typeof defaultProps & {
    children: React.ReactNode
};

const WaitForStartup = (props: WaitForStartupProps) => {
    return props.isComplete ? <>{props.children}</> : null;
};

const defaultProps = {
    isComplete: false
};

WaitForStartup.defaultProps = defaultProps;

const mapStateToProps = (state: RootState) => ({
    isComplete: startupSelectors.getIsComplete(state)
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(WaitForStartup);
