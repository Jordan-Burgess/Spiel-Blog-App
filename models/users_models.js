const users =  [
    {
        username: 'tranr5', 
        name: 'Randy',
        email: 'tranr5@gmail.com',
        password: 'password1',
        gender: 'male',
        joindate: '01/01/2022'
    },
    {
        username: 'cwigs2', 
        name: 'Chloe',
        email: 'chloew@gmail.com',
        password: 'password2',
        gender: 'female',
        joindate: '02/02/2022'
    },
    {
        username: 'alfredb3', 
        name: 'Alfred',
        email: 'alfredb@gmail.com',
        password: 'password3',
        gender: 'male',
        joindate: '03/03/2022'
    },
]

// const db = require('./index');

// async function reloadData() {
// 	try {
// 		let deleted = await db.User.deleteMany({});
// 		console.log(deleted)
// 		let reloading = await db.User.insertMany(users);
// 		console.log(reloading)
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// reloadData();

module.exports = users