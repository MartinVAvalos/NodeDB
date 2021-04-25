const db = require('./../models/data.user.model.js');
const client = require('./../models/user.model.js');

const martin = new client("Martin", "Vera", 100);



console.log(martin);
createUser(martin)
.then(result => {
    console.log("Created User");
})
.catch(error => {
    console.log("Create User Failed");
    console.log(error);
})



async function createUser(user) {
    const db_user = db.build(user);

    try {
        await db_user.save();
        console.log("worked");
    }
    catch {
        console.log("oops");
    }
}

// const db_user = db.build({ 
//     firstName: user.firstName,
//     lastName: user.lastName,
//     balance: user.balance
// });