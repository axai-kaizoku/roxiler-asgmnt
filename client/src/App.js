function App() {
	const data = [
		{
			_id: '65ff0ec7790619a042e4d3f0',
			id: '1',
			title: 'Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops',
			price: 329.85,
			description:
				'Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday',
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			sold: false,
			dateOfSale: '2021-11-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f1',
			id: '2',
			title: 'Mens Casual Premium Slim Fit TShirts ',
			price: 44.6,
			description:
				'Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.',
			category: "men's clothing",
			image:
				'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
			sold: false,
			dateOfSale: '2021-10-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f2',
			id: '3',
			title: 'Mens Cotton Jacket',
			price: 615.89,
			description:
				'great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.',
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
			sold: true,
			dateOfSale: '2022-07-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f3',
			id: '4',
			title: 'Mens Casual Slim Fit',
			price: 31.98,
			description:
				'The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.',
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
			sold: false,
			dateOfSale: '2021-10-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f4',
			id: '5',
			title:
				'John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet',
			price: 6950,
			description:
				'From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.',
			category: 'jewelery',
			image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
			sold: false,
			dateOfSale: '2022-06-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f5',
			id: '6',
			title: 'Solid Gold Petite Micropave ',
			price: 168,
			description:
				'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
			category: 'jewelery',
			image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
			sold: true,
			dateOfSale: '2021-09-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f6',
			id: '7',
			title: 'White Gold Plated Princess',
			price: 99.9,
			description:
				'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...',
			category: 'jewelery',
			image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
			sold: true,
			dateOfSale: '2022-06-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f7',
			id: '8',
			title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
			price: 32.97,
			description:
				'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
			category: 'jewelery',
			image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
			sold: false,
			dateOfSale: '2021-11-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f8',
			id: '9',
			title: 'WD 2TB Elements Portable External Hard Drive  USB 30 ',
			price: 704,
			description:
				'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system',
			category: 'electronics',
			image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
			sold: true,
			dateOfSale: '2022-07-27T14:59:54.000Z',
			__v: 0,
		},
		{
			_id: '65ff0ec7790619a042e4d3f9',
			id: '10',
			title: 'SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs',
			price: 763,
			description:
				'Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.',
			category: 'electronics',
			image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
			sold: false,
			dateOfSale: '2022-03-27T14:59:54.000Z',
			__v: 0,
		},
	];
	return (
		<main className="w-full bg-slate-50 min-h-screen">
			<div className="text-center py-8 text-6xl font-extralight">
				Transaction Dashboard
			</div>
			{/* Table start */}
			<div className="flex justify-center my-16">
				<div className="flex flex-col w-5/6">
					<div className="flex justify-between w-full">
						<div>Search Transaction</div>
						<div>
							<select
								name="month"
								id="month">
								<option value="1">January</option>
								<option value="2">Feb</option>
							</select>
						</div>
					</div>
					<table className="bg-white rounded-md p-10 my-8">
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
							{data.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.title}</td>
									<td>{row.description}</td>
									<td>{row.price}</td>
									<td>{row.category}</td>
									<td>{row.sold ? 'true' : 'false'}</td>
									<td>
										<img
											src={row.image}
											alt="item pic"
											className="w-52 h-52 object-contain"
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="w-full flex justify-between px-4">
						<div>Page No: 1</div>

						<div>
							<button>Next</button> - <button>Previous</button>
						</div>
						<div>Per Page: 10</div>
					</div>
				</div>
			</div>
			{/* Table end */}

			{/* Statistics start */}
			<div className="flex justify-center">
				<div className="flex flex-col w-3/4">
					<h2>Statistics - March</h2>
					<div className="flex flex-col bg-white p-10 rounded-xl gap-4">
						<p>Total Sale: 10000</p>
						<p>Total Sold Items: 55</p>
						<p>Total Unsold Items: 5</p>
					</div>
				</div>
			</div>
			{/* Statistics end */}

			{/* Bar Chart Start */}
			<div>BarChart</div>
			{/* Bar Chart end */}

			{/* Pie Chart start */}
			<div>Pie Chart</div>
			{/* Pie Chart end */}
		</main>
	);
}

export default App;
