const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Given a destination and content, the function writes data to the JSON file
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The information you wish to enter into the file.
 *  @returns {void} Returns empty
 */

 fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
 err ? console.error(err) : console.info(`\nData written to ${destination}`)
);
/**
*  Function reads data from a given a file and appends content
*  @param {object} content The content you want to append to the file.
*  @param {string} file The path to the file you want to save to.
*  @returns {void} Returns empty
*/
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };
  
  module.exports = { readFromFile, writeToFile, readAndAppend };
