import styled from "styled-components";

import {tileBg, tileText} from "../styles/colors";
import {base} from "../styles/spacing";

export default styled.section`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 300px;

  margin-right: ${base};
  margin-bottom: ${base};

  border: 1px solid ${tileText};
  background-color: ${tileBg};
`;
