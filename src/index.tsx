
import React from "react";
import { render } from "react-dom";
import {
    Switch,
    Route,
    Redirect,
    Router
} from "react-router-dom";
import history from "./services/history";
import WelcomeScreen from "./screens/welcome_screen";
import "./index.css";

const App = (): JSX.Element => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <WelcomeScreen />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

window.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.getElementById("root"));
});
