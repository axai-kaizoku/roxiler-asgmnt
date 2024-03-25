const transactionModel = require('../models/transactionModel');

const getAllTransactions = async (req, res) => {
	try {
		const data = await transactionModel.find();
		res.status(200).send(data);
	} catch (error) {
		console.log('Error fetching data:', error);
		res.status(500).send(error);
	}
};

const getSingleTransaction = async (req, res) => {
	try {
		const data = await transactionModel.find({ id: req.params.id });
		res.status(200).send(data[0]);
	} catch (error) {
		console.log('Error fetching data:', error);
		res.status(500).send(error);
	}
};

const searchTransactions = async (req, res) => {
	try {
		const { month, keyword } = req.params;
		const query = {
			$expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] },
		};
		if (keyword) {
			query.$or = [
				{ title: { $regex: keyword, $options: 'i' } },
				{ description: { $regex: keyword, $options: 'i' } },
				{ price: parseInt(keyword) || null },
			];
		}
		const transactions = await transactionModel.find(query);
		res.status(200).json(transactions);
	} catch (error) {
		console.error('Error fetching transactions:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const paginatedTransactions = async (req, res) => {
	try {
		const perPage = 10;
		const page = req.params.page ? req.params.page : 1;
		const transactions = await transactionModel
			.find({})
			.skip((page - 1) * perPage)
			.limit(perPage);
		res.status(200).send(transactions);
	} catch (error) {
		console.log('Error ', error);
		res.status(500).send(error);
	}
};

const barChartController = async (req, res) => {
	try {
		const { month } = req.params;
		const pipeline = [
			{
				$match: {
					$expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] },
				},
			},
			{
				$group: {
					_id: null,
					'0-100': { $sum: { $cond: [{ $lte: ['$price', 100] }, 1, 0] } },
					'101-200': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 100] }, { $lte: ['$price', 200] }] },
								1,
								0,
							],
						},
					},
					'201-300': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 200] }, { $lte: ['$price', 300] }] },
								1,
								0,
							],
						},
					},
					'301-400': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 300] }, { $lte: ['$price', 400] }] },
								1,
								0,
							],
						},
					},
					'401-500': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 400] }, { $lte: ['$price', 500] }] },
								1,
								0,
							],
						},
					},
					'501-600': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 500] }, { $lte: ['$price', 600] }] },
								1,
								0,
							],
						},
					},
					'601-700': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 600] }, { $lte: ['$price', 700] }] },
								1,
								0,
							],
						},
					},
					'701-800': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 700] }, { $lte: ['$price', 800] }] },
								1,
								0,
							],
						},
					},
					'801-900': {
						$sum: {
							$cond: [
								{ $and: [{ $gt: ['$price', 800] }, { $lte: ['$price', 900] }] },
								1,
								0,
							],
						},
					},
					'901-above': { $sum: { $cond: [{ $gt: ['$price', 900] }, 1, 0] } },
				},
			},
		];

		const result = await transactionModel.aggregate(pipeline);
		const data = result.length > 0 ? result[0] : {};
		res.json(data);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

const pieChartController = async (req, res) => {
	try {
		const { month } = req.params;

		// Aggregate pipeline to group transactions by category
		const pipeline = [
			{
				$match: {
					$expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] },
				},
			},
			{
				$group: {
					_id: '$category',
					count: { $sum: 1 },
				},
			},
		];

		const result = await transactionModel.aggregate(pipeline);
		const data = result.map((item) => ({
			category: item._id,
			count: item.count,
		}));

		res.json(data);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

const statisticsController = async (req, res) => {
	const { month } = req.params; // Assuming the month is passed as a query parameter

	try {
		// Calculate total sale amount of selected month
		const totalSaleAmount = await transactionModel.aggregate([
			{
				$match: {
					$expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] }, // Filter transactions for the selected month
				},
			},
			{
				$group: {
					_id: null,
					totalSaleAmount: { $sum: '$price' }, // Calculate total sale amount
				},
			},
		]);

		// Calculate total number of sold items of selected month
		const totalSoldItems = await transactionModel.countDocuments({
			$expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] },
			sold: true,
		});

		// Calculate total number of unsold items of selected month
		const totalUnsoldItems = await transactionModel.countDocuments({
			$expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] },
			sold: false,
		});

		res.status(200).json({
			totalSaleAmount: totalSaleAmount.length
				? totalSaleAmount[0].totalSaleAmount
				: 0,
			totalSoldItems,
			totalUnsoldItems,
		});
	} catch (error) {
		console.log('Error retrieving statistics:', error);
		res.status(500).send({ error: 'Internal Server Error' });
	}
};

module.exports = {
	getAllTransactions,
	searchTransactions,
	paginatedTransactions,
	barChartController,
	pieChartController,
	statisticsController,
	getSingleTransaction,
};
