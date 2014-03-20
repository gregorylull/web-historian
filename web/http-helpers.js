var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(req, res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(asset, 'utf8', function(err, html) {
    if( err ) throw err;
    res.write(html);
    sendResponse(req, res, status);
  });
};

// Pieces are:
// request.method, url.parse(request.url)

exports.sendResponse = function(req, res, status) {
  status = status || 200;
  res.writeHeaders(headers, status);
  res.end();
};