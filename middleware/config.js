const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection Success");
    } catch (error) {
        console.error(error)
    }
}
module.exports = connectToDB;