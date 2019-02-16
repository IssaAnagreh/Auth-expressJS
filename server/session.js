var user;
// create a session function
const createSession = function (req, res, newUser) {
  // var clients = []
  req.session.regenerate(function (err) {
    if (err) { return err }
    console.log('session newUser')
    req.session.user = String(newUser._id); //most important section of this function
    user = req.session.user;
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
  console.log('isLoggedIn', req.session, 'req.originalUrl', req.get('host') + req.originalUrl)
  return req.session ? !!req.session.user : false;
};

const checkUser = function (req, res, next) {
  console.log('req.session.views', req.session.views)
  req.session.user = user;
  if (req.session.views) {
    req.session.views++
  } else {
    req.session.views = 1
  }
  if (!isLoggedIn(req)) {
    console.log('not signed')
    res.send('')
  } else {
    next();
  }
};

const checkSession = function(req, res) {
  req.session.user = user;
  console.log('req.session', req.session)
  res.send(req.session)
}

module.exports.createSession = createSession;
module.exports.checkUser = checkUser;
module.exports.checkSession = checkSession;


