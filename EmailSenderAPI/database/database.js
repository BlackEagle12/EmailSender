
const mongoose = require('mongoose');
const password = "emailsendeR"
const dbURL = `mongodb+srv://vicky:${password}@emailsender.sy9pplp.mongodb.net/?retryWrites=true&w=majority&appName=emailSendeR`
const dbName = "emailSendeR"

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${dbURL}/${dbName}`
    );
    
    console.log(
      "\n MongoDB connected !! DB HOST: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.error("MongoDb Erorr", error);
    process.exit(1);
  }
};

module.exports = connectDB;