const fs = require('fs');

// Get the file name from the command line argument
const fileName = process.argv[2];

// Use the Node.js file system module to read the contents of the file
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${fileName}: ${err}`);
  } else {
    // Log the contents of the file to the console
    console.log(data);
  }
});