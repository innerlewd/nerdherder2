import React, { Component } from "react";
import Icon from "./Icon"
import styles from "./style.css"

const App = () => (
    <div style={styles}>
        <Icon width={30} />
        <Icon width={100} fill="#49c" />
        <Icon width={200} fill="#fa2" />
        <Icon
            fill="#fff"
            width={350}
            className="telephone"
            style={{ background: "#333", padding: "16px" }}
        />
    </div>
);

export default Icon