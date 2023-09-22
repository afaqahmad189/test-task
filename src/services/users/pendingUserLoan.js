const {userLoan} = require("../../../models/userLoan");

const pendingUserLoan = async (req, res) => {

    //here for the time I am giving hard coded user id, but it should be proper and dynamic when user auth system will implement. Currently, It is just a test task, so I am using hardcoded user id.
    const pendingLoan = await userLoan.aggregate([
        {
            $match: {
                userId: "1",
                status: 'COMPLETED'
            }
        }
    ]);

    return res.status(200).json({
        statusCode: 200,
        message: 'Pending Loans',
        data: pendingLoan
    });

};

module.exports = pendingUserLoan;
