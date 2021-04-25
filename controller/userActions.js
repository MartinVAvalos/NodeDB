const readline = require('readline-promise').default;
const fs = require('fs');

const db = require('../models/data.user.model.js');
const client = require('../models/user.model.js');

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

const MENU=
`What would you like to do?
1) Deposit
2) Withdraw
3) Open Account
4) Close Account`;


// const martin = new client("Martin", "Vera", "guerovera37@icloud.com", 100);
// createUser(martin);

options();


async function options() {
    let answer = await getInput(MENU);

    if(answer==1) {
        let result = await promptDeposit();
        let {email, deposit} = result;
        const user = await db.findOne({ where: { email }});
        // user.update({ balance: 28 });
        console.log(user);
        user.balance += Number(deposit);
        await user.save();
    }
    else if(answer==2) {
        console.log("coming soon");
    }
    else if(answer==3) {
      let user = await promptOpenAccount();
      await openAccount(user);
    }
    else if(answer==4) {
        console.log("coming soon");
    }

}

async function openAccount(user) {
    const db_user = db.build(user);

    try {
        await db_user.save();
        console.log("Created User");
    }
    catch {
        console.log("Failed to create User");
    }
}

async function updateBalance(user) {

}

async function getInput(mystring) {
    return rlp.questionAsync(mystring);
}

async function promptOpenAccount() {
    firstName = await getInput('Enter first name\n');
    lastName = await getInput('Enter last name\n');
    email = await getInput('Enter email\n');
    balance = await getInput('Enter balance\n');
    return {
        "firstName": firstName, 
        "lastName": lastName, 
        "email":email,
        "balance":balance
    };
}

async function promptDeposit() {
    email = await getInput('Enter email\n');
    balance = await getInput('Enter how much you\'d like to deposit\n');
    return {
        "email":email,
        "deposit":balance
    };
}

async function getUser(email) {
    const user = await db.findOne({ where: { email } });

    user
}

// const db_user = db.build({ 
//     firstName: user.firstName,
//     lastName: user.lastName,
//     balance: user.balance
// });