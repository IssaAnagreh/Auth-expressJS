const bcrypt = require('bcrypt-nodejs'); //requires npm install

const db = require("../database/index")
const session = require("./session")

// password functions
var comparePassword = function (attemptedPassword, hashed, callback) {
  bcrypt.compare(attemptedPassword, hashed, function (err, isMatch) {
    callback(isMatch);
  });
}

var loginUser = function (req, res) {
  console.log('in login', req.get('host') + req.originalUrl)
  var email = req.body.email;
  var password = req.body.password;
  db.selectAllEmails(email, function (err, found) {
    if (err) { // only for unpredictable errors
      res.sendStatus(500)
      return err
    } else {
      if (found.length === 0) {
        console.log("Username doesn't exist", email);
        res.status(404).json('');
      } else {
        var hashed = found[0].password // hashed password in database
        comparePassword(password, hashed, function (match) {
          if (match) {
            //res.setHeader('Content-Type', 'application/json'); //res should be json
            session.createSession(req, res, found[0])
          } else {
            console.log('wrong password or username')
            res.status(404).json();
          }
        })
      }
    }
  })
};

var loginEmployee = function (req, res) {
  console.log('in login', req.get('host') + req.originalUrl)
  var email = req.body.email;
  var password = req.body.password;
  let employee = {
    firstName: 'employee',
    lastName: 'employee',
    _id: '1'
  }
  if (email === 'employee' && password === "employee") {
    //res.setHeader('Content-Type', 'application/json'); //res should be json
    session.createSession(req, res, employee)
  } else {
    console.log('wrong password or username')
    res.status(404).json();
  }
};

var loginManager = function (req, res) {
  console.log('in login', req.get('host') + req.originalUrl)
  var email = req.body.email;
  var password = req.body.password;
  let manager = {
    firstName: 'manager',
    lastName: 'manager',
    _id: '1'
  }
  if (email === 'manager' && password === "manager") {
    //res.setHeader('Content-Type', 'application/json'); //res should be json
    session.createSession(req, res, manager)
  } else {
    console.log('wrong password or username')
    res.status(404).json();
  }
};

//destroy session function
var logoutUser = function (req, res) {
  console.log("before", req.session, 'req.originalUrl', req.get('host') + req.originalUrl)
  req.session.user = '';
  req.session.name = '';
  req.session.email = '';
  req.session.destroy(function () { //remove session
    //res.redirect('/login');
    res.status(200).send()
  });
  console.log("after", req.session)
};

module.exports.loginUser = loginUser;
module.exports.logoutUser = logoutUser;
module.exports.loginEmployee = loginEmployee;
module.exports.loginManager = loginManager;