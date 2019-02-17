const db = require("../database/index")

const newUsersManager = function (req, res, newUser) {
  db.selectAllUsersManager(function (err, found) {
    if (err) { // only for unpredictable errors
      res.sendStatus(500)
      return err
    } else {
      if (found.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(found);
      }
    }
  })
};

const newUsersEmployee = function (req, res, newUser) {
  // var clients = []
  db.selectAllUsersEmployee(function (err, found) {
    if (err) { // only for unpredictable errors
      res.sendStatus(500)
      return err
    } else {
      if (found.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(found);
      }
    }
  })
}

const approveManager = function (req, res, newUser) {
  // var clients = []
  db.managerApproval(req.body.email, function (err, done) {
    if (err) { // only for unpredictable errors
      res.sendStatus(500)
      return err
    } else {
      res.sendStatus(200);
    }
  })
}

const approveEmployee = function (req, res, newUser) {
  // var clients = []
  console.log('approveEmployee', req.body)
  db.employeeApproval(req.body.email, function (err, done) {
    if (err) { // only for unpredictable errors
      res.sendStatus(500)
      return err
    } else {
      res.sendStatus(200);
    }
  })
}



module.exports.newUsersManager = newUsersManager
module.exports.newUsersEmployee = newUsersEmployee
module.exports.approveManager = approveManager
module.exports.approveEmployee = approveEmployee
