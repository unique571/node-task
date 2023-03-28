

const fs = require('fs');

// Get the directory name from the command line argument
const dirName = process.argv[2];

// Use the Node.js file system module to read the contents of the directory
fs.readdir(dirName, (err, files) => {
  if (err) {
    console.error(`Error reading directory ${dirName}: ${err}`);
  } else {
    // Create an array to store the contents of each file
    const contents = [];

    // Use a for loop to read the contents of each file in the directory
    for (const file of files) {
      const filePath = `${dirName}/${file}`;
      const fileContent = fs.readFileSync(filePath, 'utf8');
      contents.push(fileContent);
    }

    // Use the Node.js file system module to write the contents of the array to a new file called output.txt
    fs.writeFile(`${dirName}/output.txt`, contents.join('\n'), (err) => {
      if (err) {
        console.error(`Error writing to file: ${err}`);
      } else {
        console.log('Contents written to output.txt');
      }
    });
  }
});