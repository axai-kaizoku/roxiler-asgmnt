const express = require('express');
const dotenv = require('dotenv');
const transactionRoute = require('./routes/transactionRoute');
const connectDB = require('./database/index');
const seedData = require('./config/seed-data');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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
