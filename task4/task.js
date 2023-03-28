const fs = require('fs');

// First part of the task
const fileToRead = process.argv[2];
const fileToWrite = process.argv[3];

if (!fs.existsSync(fileToRead)) {
  console.error(`${fileToRead} does not exist`);
} else if (fs.existsSync(fileToWrite)) {
  console.error(`${fileToWrite} already exists`);
} else {
  fs.readFile(fileToRead, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(fileToWrite, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Contents of ${fileToRead} written to ${fileToWrite}`);
        }
      });
    }
  });
}

// Second part of the task
const dirName = process.argv[2];

if (!fs.existsSync(dirName)) {
  console.error(`${dirName} does not exist`);
} else {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach((file) => {
        fs.readFile(`${dirName}/${file}`, (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log(`Contents of ${file}:`);
            console.log(data.toString());
          }
        });
      });
    }
  });
}