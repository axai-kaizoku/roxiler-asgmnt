export const getTransactions = async () => {
	const response = await fetch(
		'http://localhost:3030/api/v1/transaction/page/1',
	);
	const data = await response.json();
	return data;
};
