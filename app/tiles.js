import React from "react";

import NumberOfCats from "./NumberOfCats";
import BuildMonitor from "./BuildMonitor";

export default [
  <NumberOfCats key="cats" title="Open Issues" />,
  <NumberOfCats key="cats1" title="Defects" showChange={false} />,

  <BuildMonitor key="bm1" title="Build" />,
  <BuildMonitor key="bm2" title="Test" />,
  <BuildMonitor key="bm3" title="Deploy" />
];
