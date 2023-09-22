const mongoose = require("mongoose");

const userLoanSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    loanAmount: {
        type: Number,
        required: true,
    },
    loanDuration: {
        type: Number,
        required: true,
    },
    interestRate: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
},{
    timestamps: true
});

const userLoan = mongoose.model("userLoan", userLoanSchema);

module.exports = { userLoan };