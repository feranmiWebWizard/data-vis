import { csv } from "d3";

const csvUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-1uOFXqcMNj9BqK0Ue35u09XJO-hsWKeBI4f9e2S_-pVLgQjEjJGHstmPwLdzqPErYUm2IPE5wcJR/pub?gid=0&single=true&output=csv";

export const getData = async () => {
  try {
    const csvData = await csv(csvUrl);

    console.log(csvData[0]);
  } catch (error) {
    console.log(error);
  }
};
getData();
