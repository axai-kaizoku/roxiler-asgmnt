const express = require('express');
const {
	getAllTransactions,
	searchTransactions,
	paginatedTransactions,
	barChartController,
	pieChartController,
	statisticsController,
} = require('../controllers/transactionController');

const router = express.Router();

router.get('/get-all', getAllTransactions);
router.get('/search/:month/:keyword?', searchTransactions);
router.get('/page/:page', paginatedTransactions);
router.get('/statistics/:month', statisticsController);
router.get('/bar-chart/:month', barChartController);
router.get('/pie-chart/:month', pieChartController);

module.exports = router;
