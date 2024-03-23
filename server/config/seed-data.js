const connectDB = require('../database/index');
const transactionModel = require('../models/transactionModel');

const seedData = async () => {
	try {
		connectDB();
		// Check if there are any existing documents in the database
		const existingDataCount = await transactionModel.countDocuments();

		// If there are no existing documents, seed the data
		if (existingDataCount === 0) {
			const response = await fetch(`${process.env.SEEDING_URL}`);
			const data = await response.json();
			const transformedData = data.map((transaction) => ({
				id: transaction.id,
				title: transaction.title,
				price: transaction.price,
				description: transaction.description,
				category: transaction.category,
				image: transaction.image,
				sold: transaction.sold,
				dateOfSale: new Date(transaction.dateOfSale),
			}));
			await transactionModel.insertMany(transformedData);

			console.log('Data seeded successfully.');
		} else {
			console.log('Data already seeded. Skipping seeding process.');
		}
	} catch (error) {
		console.log('Error seeding data:', error);
		throw error;
	}
};

module.exports = seedData;
