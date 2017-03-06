/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// console.log(request);

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    // console.log(data);
    if (err) {
      callback(err);
    } else {
      var first = data.split('\n')[0];
      callback(null, first);
    }
  });
  // return request.filePath;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, data) {
    // console.log(data);
    if (err) {
      callback(err);
    } else {
      callback(null, data.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
