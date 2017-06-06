import styled from "styled-components";

import {tileText} from "../styles/colors";
import {base} from "../styles/spacing";

export default styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;

  padding: ${base};

  font-size: 5rem;
  color: ${tileText};
`;
