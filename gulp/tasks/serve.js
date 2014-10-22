var gulp = require('gulp')
var static = require('node-static');
var config = require('../config').server;

gulp.task('serve', function(){
  var fileServer = new static.Server(config.dir, { cache: false });
  require('http').createServer(function (request, response) {
      request.addListener('end', function () {
          fileServer.serve(request, response);
      }).resume();
  }).listen(config.port);

  console.log("serving", config.dir ,  " on port", config.port);
});

