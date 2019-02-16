const bcrypt = require('bcrypt-nodejs'); //requires npm install

const db = require("../database/index")
const session = require("./session")
const user = db.user;

// signup function
const signupUser = function (req, res) {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const information = req.body.information;
  const phonenumber = req.body.phonenumber;
  const hash = bcrypt.hashSync(password);

  db.selectAllEmails(email, function (err, found) {
    if (err) { res.sendStatus(500) }; //only for unpredictable errors

    if (found) {
      if (found.length > 0) { //account is not new
        res.status(403).send('Account already exists, please try another username');
      } else {
        let newUser = new user({
          firstName: firstName,
          lastName: lastName,
          major: '',
          email: email,
          password: hash,
          information: information,
          approval: false,
          finalapproval: false,
          phonenumber: phonenumber,
          //client: []
        })
        newUser.save() //save to database
          .then(function () {
            console.log('saved!')
            res.setHeader('Content-Type', 'application/json'); //res should be json
            session.createSession(req, res, newUser) //res is from the session function
          })
      }
    }
  })
};

module.exports.signupUser = signupUser;
