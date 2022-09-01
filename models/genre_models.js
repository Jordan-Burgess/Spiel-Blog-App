const genres =  [
	{
			genre: "travel",
	}, 
	{
			genre: "food",
	},
	{
			genre: "tech", 
	},
	{	
			genre: "design", 
	},
	{
			genre: "education", 
	},
];

const db = require('./index')


async function reloadData() {
	try {
		let deleted = await db.Genres.deleteMany({});
		console.log(deleted)
		let reloading = await db.Genres.insertMany(genres);
		console.log(reloading)
	} catch (err) {
		console.log(err);
	}
}

reloadData();

module.exports = genres;