const csvFilePath = "./Sample-Spreadsheet-100-rows.csv";
const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const jsonString = JSON.stringify(jsonObj);
    fs.writeFile("./Sample-Spreadsheet-100-rows.json", jsonString, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File converted to JSON format!");
    });
  })
  .catch((err) => console.error(err));