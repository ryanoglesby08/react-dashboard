import styled from "styled-components";

import {tileHeaderBg, tileText} from "../styles/colors";
import {noSpacing, tight} from "../styles/spacing";

export default styled.h2`
  ${noSpacing}
  
  padding: ${tight};

  font-size: 1.5rem;
  text-align: center;

  color: ${tileText};
  background-color: ${tileHeaderBg}
`;
