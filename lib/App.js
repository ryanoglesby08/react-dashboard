import React from "react";
import styled from "styled-components";

import tiles from "../app/tiles";

import {dashboardBg} from "./styles/colors";
import {base} from "./styles/spacing";

const Dashboard = styled.div`
  height: 100%;

  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  padding: ${base};

  background-color: ${dashboardBg};
`;

const App = () => (
  <Dashboard>
    {tiles}
  </Dashboard>
);

export default App;
