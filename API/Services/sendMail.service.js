const sendMail = require("../Utilities/sendMail");


const sendMailService = async (req, res, next) => {
    const body = req.body;
    let fromEmail = body.from;
    let toEmailList = body.to || [];
    let pass = body.password;
    let email = body.email;

    let SuccessEmails = []
    let FailedEmails = []

    for (let index = 0; index < toEmailList.length; index++) {
        const toEmail = toEmailList[index];
        try {
            const res = await sendMail(fromEmail, toEmail, pass, email);
            SuccessEmails.push(toEmail);
            console.log("Email sent sucessfully", toEmail, SuccessEmails);
        } catch (error) {
            FailedEmails.push(toEmail);
            console.log("Failed to sent email", toEmail, FailedEmails);
        }
    }

    res.send({
        SecessfullySent : SuccessEmails,
        FailedTOSent: FailedEmails
    })
}

module.exports = sendMailService