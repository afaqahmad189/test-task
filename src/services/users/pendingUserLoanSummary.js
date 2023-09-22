const {userLoan} = require("../../../models/userLoan");

const pendingUserLoanSummary = async (req, res) => {
    const response =  {
        totalLoanAmount: 0,
        totalPendingLoan: 0
    }


    //here for the time I am giving hard coded user id, but it should be proper and dynamic when user auth system will implement. Currently, It is just a test task, so I am using hardcoded user id.
    const pendingLoan = await userLoan.aggregate([
        {
            $match: {
                userId: "1",
                status: 'COMPLETED'
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
                totalPendingLoan: '$count',
                totalLoanAmount: 1
            }
        }
    ]);

    if (pendingLoan.length > 0) {
        response.totalPendingLoan = pendingLoan[0].totalPendingLoan
        response.totalLoanAmount = pendingLoan[0].totalLoanAmount
    }

    return res.status(200).json({
        statusCode: 200,
        message: 'Pending Loans',
        data: response
    });

};

module.exports = pendingUserLoanSummary;
