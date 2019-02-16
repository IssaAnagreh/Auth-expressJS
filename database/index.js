const mongoose = require('mongoose');
mongoose.connect('mongodb://isa:isa123@ds135335.mlab.com:35335/polaris');
const db = mongoose.connection;

db.on('error', function (err) {
  console.log('mongoose connection error', err);
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  major: String,
  email: String,
  password: String,
  information: String,
  approval: Boolean,
  finalapproval: Boolean,
  phonenumber: Number,
  //client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'client' }]
});

var user = mongoose.model('user', userSchema);

const selectAllEmails = function (email, callback) {
  user.find({ email: email }, null, { sort: { rating: -1 } }, function (err, items) {
    if (err) {
      console.log('err', err)
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.user = user;
module.exports.selectAllEmails = selectAllEmails;


