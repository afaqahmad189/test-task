const {userLoan} = require("../../../models/userLoan");

const activeUserLoanSummary = async (req, res) => {
    const response =  {
        totalLoanAmount: 0,
        totalActiveLoan: 0
    }

    //here for the time I am giving hard coded user id, but it should be proper and dynamic when user auth system will implement. Currently, It is just a test task, so I am using hardcoded user id.
    const activeLoan = await userLoan.aggregate([
        {
            $match: {
                userId: "1",
                status: 'ACTIVE'
            }
        },
        {
            $group: {
                _id: null,
                count: { $sum: 1 },
                totalLoanAmount: { $sum: '$loanAmount' }
            }
        },
        {
            $project: {
                _id: 0,
                totalActiveLoan: '$count',
                totalLoanAmount: 1
            }
        }
    ]);

    if (activeLoan.length > 0) {
        response.totalActiveLoan = activeLoan[0].totalActiveLoan
        response.totalLoanAmount = activeLoan[0].totalLoanAmount
    }


    return res.status(200).json({
        statusCode: 200,
        message: 'Active Loans',
        data: response
    });

};

module.exports = activeUserLoanSummary;
