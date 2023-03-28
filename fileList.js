const fs = require("fs");
const path = require("path");

const directoryPath = process.argv[2];
const extension = process.argv[3];

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.error(err);
  }

  const filteredFiles = files.filter(function (file) {
    return path.extname(file) === `.${extension}`;
  });

  console.log(filteredFiles);
});