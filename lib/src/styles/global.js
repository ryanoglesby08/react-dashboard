import {injectGlobal} from "styled-components";

import {noSpacing} from "./spacing";

injectGlobal`
  html,
  body {
    ${noSpacing}

    height: 100%;
  }

  #root {
    ${noSpacing}

    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: inherit;
    font: inherit;
  }

  *::before,
  *::after {
    box-sizing: inherit;
    font: inherit;
  }
`
