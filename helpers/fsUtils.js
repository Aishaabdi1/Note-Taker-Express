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

