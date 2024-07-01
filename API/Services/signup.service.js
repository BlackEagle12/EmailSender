

const addNewUser = async (req, res, next) => {
    const user = req.body
    console.log(user);
    console.log("User added...");
    res.send("User added...")
}

module.exports = {
    AddNewUser : addNewUser
}