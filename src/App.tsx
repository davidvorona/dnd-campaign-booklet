import React from "react";
import {
    Switch,
    Route,
    Redirect,
    Router
} from "react-router-dom";

import history from "./services/history";

import WelcomeScreen from "./screens/welcome_screen";

export default function(): JSX.Element {
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
}
