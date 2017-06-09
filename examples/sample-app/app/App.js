import React from "react";

import { Dashboard } from "react-dashboard";

import HelloWorld from "./HelloWorld";
import JiraPoller from "./JiraPoller";
import BuildMonitor from "./BuildMonitor";

const App = () => (
  <Dashboard>
    <HelloWorld />

    <JiraPoller title="Open Issues" />
    <JiraPoller title="Defects" showChange={false} />

    <BuildMonitor title="Build" />
    <BuildMonitor title="Test" />
    <BuildMonitor title="Deploy" />
  </Dashboard>
);

export default App;
