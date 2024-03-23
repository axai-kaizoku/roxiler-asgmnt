const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(`${process.env.MONGODB_STRING}`);
		console.log(`Connected to MongoDB Database ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
