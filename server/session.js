var user;
var name;
var email;
// create a session function
const createSession = function (req, res, newUser) {
  // var clients = []
  req.session.regenerate(function (err) {
    if (err) { return err }
    console.log('create session newUser', newUser)
    req.session.user = String(newUser._id); //most important section of this function
    req.session.name = String(newUser.firstName) + "-" + String(newUser.lastName);
    req.session.email =  String(newUser.email)
    user = req.session.user;
    name = req.session.name;
    email = req.session.email;
    if (req.session.views) {
      req.session.views++
      console.log('after save session', req.session)
    } else {
      req.session.views = 1
      console.log('after save session', req.session)
    }
    res.sendStatus(200)
  });
};

const isLoggedIn = function (req) {
  //console.log('isLoggedIn', req.session, 'req.originalUrl', req.get('host') + req.originalUrl)
  console.log('isLoggedIn')
  return req.session ? !!req.session.user : false;
};

const checkUser = function (req, res, next) {
  console.log('server checkUser=======', req.session)
  // req.session.user = user;
  // req.session.name = name;
  // req.session.email = email;
  if (req.session.views) {
    req.session.views++
  } else {
    req.session.views = 1
  }
  if (isLoggedIn(req)) {
    console.log('not signed', isLoggedIn(req))
    res.status(200).send(req.session)
  } else {
    res.status(200).send('')
  }
};

const saveSession = function(req, res) {
  req.session.user = user;
  req.session.name = name;
  req.session.email = email;
  console.log('saveSession=======', req.session)
  res.send(req.session)
}

module.exports.createSession = createSession;
module.exports.checkUser = checkUser;
module.exports.saveSession = saveSession;


