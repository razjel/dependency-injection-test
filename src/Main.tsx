/*
 * a
 */

/*
 * a
 */
import "/src/styles/build.scss";
import "firebase/database";
import React from "react";
import ReactDOM from "react-dom";
import {ActionFlowInit} from "./common/actionFlow/ActionFlowInit";
import {UserRandomizeDashboard} from "./dashboard/UserRandomizeDashboard";

async function init() {
	ActionFlowInit({startBrowserFrameManager: true});
}

init();
ReactDOM.render(<UserRandomizeDashboard />, document.getElementById("app"));
