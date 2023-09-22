const {userLoan} = require("../../../models/userLoan");

const seedUserLoan = async (req, res) => {

    //array of dummy enteries for seed in table
    const entries = [{userId: "1", name: "Kidsgrove Loan -4", loanAmount: 3000, loanDuration: 12, interestRate: 15, status: 'ACTIVE'},
        {userId: "1", name: "Kidsgrove Loan -3", loanAmount: 4000, loanDuration: 11, interestRate: 3, status: 'ACTIVE'},
        {userId: "1", name: "Kidsgrove Loan -2", loanAmount: 1000, loanDuration: 2, interestRate: 5, status: 'ACTIVE'},
        {userId: "1", name: "Kidsgrove Loan -1", loanAmount: 1500, loanDuration: 5, interestRate: 10, status: 'COMPLETED'},
        {userId: "1", name: "Kidsgrove Loan -5", loanAmount: 1200, loanDuration: 7, interestRate: 1, status: 'COMPLETED'}
    ]
    const insertedSeeders = await userLoan.insertMany(entries);

    return res.status(201).json({
        statusCode: 201,
        message: 'Successfully Seed',
        data: insertedSeeders
    });
};

module.exports = seedUserLoan;
