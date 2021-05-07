const { readFile } = require("fs/promises");

// const timtout = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });

const interwal = (ms) =>
  // new Promise((resolve, reject) => {
  setInterval(() => {
    // resolve();
    fun();
  }, ms);
// });

const main = async () => {
  // await timtout(500);
  await interwal(500);
};

const fun = async () => {
  const fileBuffer = await readFile("sample.json");
  const obj = JSON.parse(fileBuffer.toString());

  const { phoneNumbers, lastName, firstName, address } = obj;
  const { state, city, streetAddress } = address;

  console.log(
    `${phoneNumbers.length} ${firstName} ${lastName} ${state}, ${city}, ${streetAddress}`
  );
};

main();
