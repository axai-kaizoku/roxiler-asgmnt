const express = require('express');
const dotenv = require('dotenv');
const transactionRoute = require('./routes/transactionRoute');
const connectDB = require('./database/index');
const seedData = require('./config/seed-data');

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/transaction', transactionRoute);

app.get('/', (req, res) => {
	res.json({ message: 'Server is up and running!' });
});

Promise.all([connectDB(), seedData()])
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.error('Failed to initialize server:', error);
	});
