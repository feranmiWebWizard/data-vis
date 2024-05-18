import * as vega from "vega";
import * as vegaLite from "vega-lite";
import * as vl from "vega-lite-api";
import { Handler } from "vega-tooltip";
import { config } from "./config";
import { getData } from "./getData";
import { vis } from "./vis";
import data from "vega-datasets";

vl.register(vega, vegaLite, {
  view: { renderer: "svg" },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

const width = window.innerWidth * 0.6;
const height = window.innerHeight * 0.6;

const run = async () => {
  const marks = vis
    .data(await getData("iowa-electricity.csv"))
    .width(width)
    .height(height)
    .autosize({ type: "fit", contains: "padding" })
    .config(config);

  const globalTemps = vl
    .markCircle()
    .data(await getData("global-temp.csv"))
    .width(width)
    .height(height)
    .encode(
      vl.x().fieldQ("year").scale({ zero: false }),
      vl.y().fieldQ("temp").scale({ zero: false })
    );

  document.body.appendChild(
    await vl
      .vconcat(vl.layer(marks, marks.markCircle()), vl.layer(globalTemps))
      .render()
  );
};
run();
