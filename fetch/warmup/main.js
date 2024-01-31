import fetch from "node-fetch";
import fs from "fs/promises";

fetch("https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png")
  .then((response) => response.arrayBuffer())
  .then((image) => fs.writeFile("./test.png", Buffer.from(image)));
