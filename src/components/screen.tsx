import React from "react";

interface ScreenProps {
    style?: React.CSSProperties,
    children?: React.ReactNode
}

const Screen = (props: ScreenProps): JSX.Element => {
    return (
        <div className="screen" style={props.style}>
            {props.children}
        </div>
    );
};

export default Screen;
