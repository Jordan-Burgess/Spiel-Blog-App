const genres =  [
	{
			genre: "Travel",
			img: "https://images.unsplash.com/photo-1661997011608-a8bc1a4da810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
	}, 
	{
			genre: "Food",
			img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
			genre: "Tech", 
			img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{	
			genre: "Design", 
			img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
			genre: "Education", 
			img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
	},
];

// const db = require('./index')


// async function reloadData() {
// 	try {
// 		let deleted = await db.Genre.deleteMany({});
// 		console.log(deleted)
// 		let reloading = await db.Genre.insertMany(genres);
// 		console.log(reloading)
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// reloadData();

module.exports = genres;