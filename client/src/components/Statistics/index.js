import { useEffect, useState } from 'react';
import { getMonthName } from '../../utils';

export default function Statistics({ month }) {
	const [statistics, setStatistics] = useState({
		totalSale: 10000,
		totalSold: 20,
		totalUnsold: 8,
	});

	const getStatistics = async (statsMonth) => {
		try {
			const response = await fetch(
				`http://localhost:3030/api/v1/transaction/statistics/${statsMonth}`,
			);
			const data = await response.json();
			setStatistics({
				totalSale: data.totalSaleAmount,
				totalSold: data.totalSoldItems,
				totalUnsold: data.totalUnsoldItems,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getStatistics(month);
	}, [month]);

	return (
		<>
			<h2>Statistics - {getMonthName(month)}</h2>
			<div className="flex flex-col gap-4 p-10 bg-white rounded-xl">
				<p>Total Sale: {statistics.totalSale.toFixed(2)}</p>
				<p>Total Sold Items: {statistics.totalSold}</p>
				<p>Total Unsold Items: {statistics.totalUnsold}</p>
			</div>
		</>
	);
}
