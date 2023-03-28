const fs = require("fs");

const date = new Date();
console.log(`Current date and time: ${date}`);

const fileContent = fs.readFileSync("content.txt", "utf8");

console.log(fileContent);