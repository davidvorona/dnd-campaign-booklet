import React from "react";
import "./styles.css";

type ScreenProps = typeof defaultProps & {
    children: React.ReactNode,
    style?: React.CSSProperties,
    ignorePadding?: boolean
};

const defaultProps = {
    style: {},
    ignorePadding: false
};

const Screen = (props: ScreenProps): JSX.Element => {
    return (
        <div className="screen" style={props.style}>
            {props.ignorePadding 
                ? props.children
                : <div className="screen-padding">{props.children}</div>
            }
        </div>
    );
};

Screen.defaultProps = defaultProps;

export default Screen;
