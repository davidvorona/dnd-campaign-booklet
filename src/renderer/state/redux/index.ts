import { combineReducers } from "redux";
import { reducer as settings } from "./settings_redux";
import { reducer as startup } from "./startup_redux";

// combine reducers
export default combineReducers({
    settings,
    startup
});
