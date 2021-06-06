
import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {
    Switch,
    Route,
    Redirect,
    Router
} from "react-router-dom";
import history from "./services/history";
import store from "./state/store";
import startupActions from "./state/redux/startup_redux";
import WelcomeScreen from "./screens/welcome_screen";
import "./index.css";

class App extends Component {
    async componentDidMount() {
        store.dispatch(startupActions.startup());
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeScreen />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

window.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.getElementById("root"));
});
