import fs from "fs";
import Histogram from "./sample.js";

async function histogramFromTextFile() {
  let histogram = new Histogram();
  fs.readFile("./ch01/ex08/kokoro.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    histogram.add(data);
    console.log(histogram.toString());
  });
  return histogram;
}

histogramFromTextFile();
