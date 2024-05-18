import { csv } from "d3";
import data from "vega-datasets";

export const getData = async (link) => {
  try {
    const csvData = await data[link]();

    console.log(csvData[0]);
    return csvData;
  } catch (error) {
    console.log(error);
  }
};
getData();
