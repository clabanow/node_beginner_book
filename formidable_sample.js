var formidable = require('formidable'),
    http = require('http'),
    sys = require('sys');

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload

    var form = new formidable.IncomingForm();
    form.parse(req, function(error, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload: \n\n');
      res.end(sys.inspect({fields: fields, files: files}))
    });
    return;
  }
})