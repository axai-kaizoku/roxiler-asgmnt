import { useEffect, useState } from 'react';
import { getMonthName } from './utils';
import BarChart from './components/BarChart';
import Statistics from './components/Statistics';
import PieChart from './components/PieChart';

function App() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [month, setMonth] = useState(3);
	const [keyword, setKeyword] = useState('');

	const fetchTransactions = async (pageNo) => {
		try {
			// const response = await getTransactions();
			const response = await fetch(
				`http://localhost:3030/api/v1/transaction/page/${pageNo}`,
			);
			const Transactiondata = await response.json();
			setData(Transactiondata);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const prevPage = async () => {
		try {
			if (page === 1) {
				return;
			} else {
				setPage(page - 1);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const nextPage = async () => {
		try {
			if (page === 6) {
				return;
			} else {
				setPage(page + 1);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const searchResults = async (searchMonth = 3, searchKeyword) => {
		try {
			let url = `http://localhost:3030/api/v1/transaction/search/${searchMonth}`;

			// If searchKeyword is not empty, add it to the URL
			if (searchKeyword && searchKeyword.trim() !== '') {
				url += `/${searchKeyword.trim()}`;
			}

			const response = await fetch(url);
			const searchData = await response.json();
			setData(searchData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		searchResults(month, keyword);
	}, [month, keyword]);

	useEffect(() => {
		fetchTransactions(page);
	}, [page]);

	return (
		<main className="w-full min-h-screen bg-slate-50">
			<div className="py-8 text-6xl text-center font-extralight">
				Transaction Dashboard
			</div>
			{/* Table start */}
			<div className="flex justify-center my-16">
				<div className="flex flex-col w-5/6">
					<div className="flex justify-between w-full">
						<input
							type="text"
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') setKeyword(e.target.value);
							}}
							className="p-4 text-lg "
							placeholder="Search transaction"
						/>
						<div>
							<select
								name="month"
								id="month"
								onChange={(e) => {
									setMonth(e.target.value);
								}}
								defaultValue={3}>
								<option value="1">January</option>
								<option value="2">February</option>
								<option value="3">March</option>
								<option value="4">April</option>
								<option value="5">May</option>
								<option value="6">June</option>
								<option value="7">July</option>
								<option value="8">August</option>
								<option value="9">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>
							</select>
						</div>
					</div>
					<table className="p-10 my-8 bg-white rounded-md">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Description</th>
								<th>Price</th>
								<th>Category</th>
								<th>Sold</th>
								<th>Image</th>
							</tr>
						</thead>
						<tbody>
							{data.length > 0 ? (
								data.map((row) => (
									<tr key={row.id}>
										<td>{row.id}</td>
										<td>{row.title}</td>
										<td>{row.description}</td>
										<td>{row.price.toFixed(2)}</td>
										<td>{row.category}</td>
										<td>{row.sold ? 'true' : 'false'}</td>
										<td>
											<img
												src={row.image}
												alt="item pic"
												className="object-contain w-52 h-52"
											/>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={7}>
										<p className="p-10 text-3xl text-center">No Data</p>
									</td>
								</tr>
							)}
						</tbody>
					</table>
					<div className="flex justify-between w-full px-4">
						<div>Page No: {page}</div>

						<div>
							<button onClick={prevPage}>Previous</button> -
							<button onClick={nextPage}>Next</button>
						</div>
						<div>Count: {data.length}</div>
					</div>
				</div>
			</div>
			{/* Table end */}

			{/* Statistics start */}
			<div className="flex justify-center my-10">
				<div className="flex flex-col w-3/4">
					<Statistics month={month} />
				</div>
			</div>
			{/* Statistics end */}

			{/* Bar Chart Start */}
			<div className="flex justify-center my-10">
				<div className="w-4/5">
					<h2>Bar Chart Stats - {getMonthName(month)}</h2>
					<div className="w-full">
						<BarChart month={month} />
					</div>
				</div>
			</div>
			{/* Bar Chart end */}

			{/* Pie Chart start */}
			<div className="flex justify-center my-20">
				<div className="flex justify-center w-4/5">
					<h2>Pie Chart Stats - {getMonthName(month)}</h2>
					<div className="flex justify-center w-2/4 p-10 ">
						<PieChart month={month} />
					</div>
				</div>
			</div>

			{/* Pie Chart end */}
		</main>
	);
}

export default App;
