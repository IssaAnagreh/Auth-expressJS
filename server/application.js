const fs = require('fs');
const path = require('path');
var formidable = require('formidable');



const upload = function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.files.path;
    var newpath = path.resolve(__dirname, '../public/uploads') + '/' + files.files.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
      res.sendStatus(200);
    });
  })
}

const download = function (req, res) {
  var dirname = path.resolve(__dirname, '../public/uploads/', req.params.file) 
  res.download(dirname)
  res.download(dirname, '', function(err){
    if (err) {
      console.log('download err', err)
      res.status(404).send(err)
    } else {
    }
  });
};

module.exports.upload = upload;
module.exports.download = download;

