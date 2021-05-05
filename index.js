const fs = require("fs/promises");

const timtout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("TIMER");
    }, ms);
  });

const main = async () => {
  await timtout(500);
  const json = await fs.readFile("example.json");
  console.log(json);
};

main();

console.log("END");
