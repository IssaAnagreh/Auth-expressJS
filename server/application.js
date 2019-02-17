const fs = require('fs');
const path = require('path');
var formidable = require('formidable');
const db = require("../database/index")


const upload = function (req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    var oldpath = files.files.path;
    var newp = path.resolve(__dirname, '../public/uploads/') + '/USER' + req.session.name + '--FILE' + files.files.name;
    var newpath = path.resolve(__dirname, '../src/application/uploads/') + '/USER' + req.session.name + '--FILE' + files.files.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;

      db.selectAllEmails(req.session.email, function (err, found) {
        if (err) { // only for unpredictable errors
          res.sendStatus(500)
          return err
        } else {
          if (found.length === 0) {
            res.status(404).json('');
          } else {
            let newImages = found[0].images
            newImages.push(files.files.name)
            db.updateImages(req.session.email, newImages, function (err, done) {
              if (err) { // only for unpredictable errors
                res.sendStatus(500)
                return err
              } else {
                res.sendStatus(200);
              }
            })
          }
        }
      })
    });
    // fs.rename(oldpath, newp, function (err) {
    //   if (err) throw err;
    //   res.sendStatus(200);
    //   console.log('Uploaded 2!')
    // });
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

