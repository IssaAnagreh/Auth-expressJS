const express = require('express');
const bodyParser = require('body-parser');
const request = require('request'); //requires npm install
const partial = require('express-partial'); //requires npm install
const cookieParser = require('cookie-parser'); //requires npm install
const session = require('express-session'); //requires npm install
const path = require("path"); //requires npm install
// const Promise = require('bluebird'); //requires npm install
// const multer = require("multer");
// //const upload = multer({dest: '/uploads/'})
// const cloudinary = require("cloudinary");
// const cloudinaryStorage = require("multer-storage-cloudinary");


const signupUser = require('./signup.js');
const loginUser = require('./login.js');
const forgotPassword = require('./forgotPassword.js');
const application = require('./application')
const sessionSection = require('./session')

// use express
const app = express();

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

// cookies and session
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  cookie: { secure: false, maxAge: 3600000 },
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));

// connect to react
app.use(express.static(__dirname + 'build'));


app.get('/checkuser', sessionSection.checkSession);

app.post('/login', loginUser.loginUser)
app.get('/logout', loginUser.logoutUser)
app.post('/signup', signupUser.signupUser)
app.post('/application/upload', application.upload)
app.get('/application/download/:file', application.download)
app.get('/reset/:token', forgotPassword.token);
app.get('/reset', forgotPassword.forgotPassword)



// deployment helper
if (process.env.NODE_ENV === 'production') {
  // serve any static files
  app.use(express.static(path.join(__dirname, 'build')));
  //app.use(express.static(path.join(__dirname, '../public')));
}

// handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//listen to local host
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('listening on port 8080!');
});
