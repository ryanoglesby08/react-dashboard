import styled from "styled-components";

import {dashboardBg} from "./styles/colors";
import {base} from "./styles/spacing";

export default styled.main`
  height: 100%;

  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  padding: ${base};

  background-color: ${dashboardBg};
`;
