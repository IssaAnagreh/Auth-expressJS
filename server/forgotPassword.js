const nodemailer = require('nodemailer');
const crypto = require('crypto');

const db = require("../database/index")
const user = db.user;

// forgot password function
const forgotPassword = function (req, res) {

    const newPassword = crypto.randomBytes(20).toString('hex');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'polaris.issa@gmail.com',
            pass: 'Issa123456789!'
        }
    });
    req.email = 'isa@isa.com'
    const mailOptions = {
        from: 'polaris.issa@gmail.com',
        to: 'isa_anagreh@hotmail.com',
        subject: 'Sending Email using Node.js',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + req.email + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).send('done')
}

const token = function(req, res) {
    user.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
        if (!user) {
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/forgot');
        }
        res.render('reset', {
            user: req.user
        });
    });
}

module.exports.forgotPassword = forgotPassword;
module.exports.token = token;

