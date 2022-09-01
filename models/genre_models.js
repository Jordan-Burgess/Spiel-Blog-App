const genre =  [
	{genres: ['travel','food','tech','design', 'education']},
	
];

// const db = require('./index');

// async function reloadData() {
// 	try {
// 		let deleted = await db.Genre.deleteMany({});
// 		console.log(deleted)
// 		let reloading = await db.Genre.insertMany(genre);
// 		console.log(reloading)
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// reloadData();

module.exports = genre;