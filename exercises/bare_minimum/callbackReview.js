/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

console.log(request);

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  cb('ENOENT', filePath);
  // TODO
  // return request.filePath;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // return request.url;
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
