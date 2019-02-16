const fs = require('fs');
const path = require('path');
var formidable = require('formidable');
const db = require("../database/index")


const upload = function (req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    console.log('==========upload files===========', files.files)

    db.selectAllEmails(req.session.email, function (err, found) {
      if (err) { // only for unpredictable errors
        res.sendStatus(500)
        return err
      } else {
        if (found.length === 0) {
          console.log("Username doesn't exist");
          res.status(404).json('');
        } else {
          found[0].email.push(files.files.name)
        }
      }
    })

    var oldpath = files.files.path;
    var newp = path.resolve(__dirname, '../public/uploads') + "/" + files.files.name + '-USER: ' + req.session.name;
    var newpath = path.resolve(__dirname, '../src/application/uploads') + "/" + files.files.name + '-USER: ' + req.session.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
    });
    fs.rename(oldpath, newp, function (err) {
      if (err) throw err;
      res.sendStatus(200);
    });
  })
}

const download = function (req, res) {
  let param = req.query.file;
  //var dirname = path.resolve(__dirname, '../public/uploads/', req.params.file)  || 
  var dirname = path.resolve(__dirname, '../public/uploads/1.jpg')
  console.log('=============dirname===============', dirname)
  res.download(dirname, 'issa.jpg')
  // res.download(dirname, '', function(err){
  //   if (err) {
  //     console.log('download err', err)
  //     res.status(404).send(err)
  //   } else {
  //     res.send('')
  //   }
  // });
};

module.exports.upload = upload;
module.exports.download = download;

