const mongoose = require('mongoose');
mongoose.connect('mongodb://isa:isa123@ds135335.mlab.com:35335/polaris');
const db = mongoose.connection;

db.on('error', function (err) {
  console.log('mongoose connection error', err);
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  major: String,
  email: String,
  password: String,
  information: String,
  approval: Boolean,
  finalapproval: Boolean,
  phonenumber: Number,
  images: [],
  //client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'client' }]
});

const user = mongoose.model('user', userSchema);

const selectAllEmails = function (email, callback) {
  user.find({ email: email }, function (err, items) {
    if (err) {
      console.log('err', err)
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const selectAllUsersEmployee = function (callback) {
  user.find({ approval: false }, null, function (err, items) {
    if (err) {
      console.log('err', err)
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const selectAllUsersManager = function (callback) {
  user.find({ finalapproval: false }, function (err, items) {
    if (err) {
      console.log('err', err)
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const updateImages = function (email, callback) {
  user.updateOne({ email: email }, { finalapproval: true }, function (err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

const managerApproval = function (email, callback) {
  console.log('managerApproval', email)
  user.updateOne({ email: email }, { finalapproval: true }, function (err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

const employeeApproval = function (email, callback) {
  console.log('employeeApproval', email)
  user.updateOne({ email: email }, { approval: true }, function (err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

module.exports.user = user;
module.exports.selectAllEmails = selectAllEmails;
module.exports.updateImages = updateImages;
module.exports.selectAllUsersEmployee = selectAllUsersEmployee;
module.exports.selectAllUsersManager = selectAllUsersManager;
module.exports.managerApproval = managerApproval;
module.exports.employeeApproval = employeeApproval;