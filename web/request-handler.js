var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  archive.serveAssets(res, 'index.html');
  res.end(archive.paths.list); // why am i giving the response the archive list?
};