
var nodemailer = require('nodemailer');

const sendMail = async (from, to, pass, email) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: from,
            pass: pass
        },
        send
    });

    var mailOptions = {
        from: from,
        to: to,
        subject: email.subject,
        text: email.body
    };

    return new Promise((resolve, reject) => {        
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("ERROR IN SEND MAIL", error);
                reject(error); // or use rejcet(false) but then you will have to handle errors
            }
            else {
                console.log("SENT MAIL", info);
                resolve(info);
            }
        })
    })
}
module.exports = sendMail