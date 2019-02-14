const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const mongoose = require('mongoose');
const request = require('request'); //requires npm install
const partial = require('express-partial'); //requires npm install
const cookieParser = require('cookie-parser'); //requires npm install
const session = require('express-session'); //requires npm install
const bcrypt = require('bcrypt-nodejs'); //requires npm install
const path = require("path"); //requires npm install
// const Promise = require('bluebird'); //requires npm install
// const multer = require("multer");
// //const upload = multer({dest: '/uploads/'})
// const cloudinary = require("cloudinary");
// const cloudinaryStorage = require("multer-storage-cloudinary");

// from Database
// var worker = db.worker;

// use express
var app = express();

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

// cookies and session
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  cookie: { secure: false, maxAge: 60000 },
  secret: 'shhh, it\'s a secret',
  resave: true,
  saveUninitialized: true
}));

// connect to react
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/register', function(req, res) {
  console.log('I have data', req.body.major)
  res.status(200).send('ana')
  console.log('signup')
})

app.post('/register', function(req, res) {
  console.log('I have data', req.body.major)
  res.status(200).send('ana')
  console.log('signup')
})

// deployment helper
if (process.env.NODE_ENV === 'production') {
  // serve any static files
  app.use(express.static(path.join(__dirname, '../build')));
  app.use(express.static(path.join(__dirname, '../public')));
}

// handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.status(404).send('Page is not found');
});


//listen to local host
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('listening on port 8080!');
});
