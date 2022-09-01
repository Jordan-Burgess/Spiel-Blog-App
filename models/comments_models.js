const comments =  [
    {
        username: 'thisguy', 
        content: 'I wish to thank you for all of the recipes. What a VARIETY! My hobby is baking desserts. I have been baking since I was a teenager.',
        likes: 17,
        date: '08/20/2022',
        blogpost: 'food',
    },
    {
        username: 'somegirl', 
        content: 'Very great work at the topic of travel. You tell me all aspects of life there, even their life style, culture and people. Children in rough getup show their real life aspects.  I want to say you congrates for this great article.',
        likes: 2,
        date: '08/21/2022',
        blogpost: 'travel',
    },
    {
        username: 'otherperson', 
        content: 'Thanks for the post, it was a good read.',
        likes: 23,
        date: '08/22/2022',
        blogpost: 'tech',
    },
    {
        username: 'othergirl', 
        content: 'nice post',
        likes: 12,
        date: '08/23/2022',
        blogpost: 'education',
    },
    {
        username: 'commentguy', 
        content: 'I\’ve been surfing on the web more than 3 hours today, yet I never found any stunning article like yours. It\’s alluringly worth for me. As I would see it, if all web proprietors and bloggers made puzzling substance as you did, the net will be in a general sense more beneficial than at whatever point in late memory.',
        likes: 55,
        date: '08/24/2022',
        blogpost: 'design',
    },
]

// const db = require('./comments');

// async function reloadData() {
// 	try {
// 		let deleted = await db.Blog.deleteMany({});
// 		console.log(deleted)
// 		// console.log(deleted);
// 		let reloading = await db.Blog.insertMany(blogs);
// 		console.log(reloading)
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// reloadData();

module.exports = comments