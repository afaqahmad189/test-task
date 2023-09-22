const {userLoan} = require("../../../models/userLoan");

const activeUserLoan = async (req, res) => {

    //here for the time I am giving hard coded user id, but it should be proper and dynamic when user auth system will implement. Currently, It is just a test task, so I am using hardcoded user id.
    const activeLoan = await userLoan.aggregate([
        {
            $match: {
                userId: "1",
                status: 'ACTIVE'
            }
        }
    ]);

    return res.status(200).json({
        statusCode: 200,
        message: 'Active Loans',
        data: activeLoan
    });

};

module.exports = activeUserLoan;
