

const authenticateUser = async (req, res, next) => {
    const cred = req.body
    console.log(cred);
    console.log("User authenticated...");
    res.send("User authenticated...")
}

module.exports = {
    AuthenticateUser : authenticateUser
}