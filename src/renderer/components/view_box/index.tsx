import React from "react";
import "./styles.css";

interface ViewBoxProps {
    children: React.ReactNode
}

const ViewBox = (props: ViewBoxProps): JSX.Element => (
    <div className="view-box">
        {props.children}
    </div>
);

export default ViewBox;
