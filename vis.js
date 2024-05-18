import * as vl from "vega-lite-api";

export const vis = vl
  .markLine({})
  .encode(
    vl.y().fieldQ("net_generation").title("Net Generation"),
    vl.x().fieldT("year").title("Year"),
    vl.color().fieldN("source"),
    vl.tooltip().fieldN("net_generation")
  );
