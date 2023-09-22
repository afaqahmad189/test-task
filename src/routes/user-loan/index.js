const express = require("express");
const router = express.Router();

const seedUserLoan = require("../../services/users/seedUserLoan");
const pendingUserLoan = require("../../services/users/pendingUserLoan");
const pendingUserLoanSummary = require("../../services/users/pendingUserLoanSummary");
const activeUserLoanSummary = require("../../services/users/activeUserLoanSummary");
const activeUserLoan = require("../../services/users/activeUserLoan");

/**
 * @swagger
 * /user-loan/seed:
 *   post:
 *     summary: Seed the dummy entries
 *     description: Seed the dummy entries.
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Successfully Seed"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The id.
 *                         example: "1iej"
 *                       userId:
 *                         type: string
 *                         description: The user ID.
 *                         example: "1"
 *                       name:
 *                         type: string
 *                         description: The loan's name.
 *                         example: Leanne Graham
 *                       loanAmount:
 *                         type: number
 *                         description: The loan's amount.
 *                         example: 199
 *                       loanDuration:
 *                         type: number
 *                         description: The loan's duration in month.
 *                         example: 11
 *                       interestRate:
 *                         type: number
 *                         description: The loan's interest rate in percent.
 *                         example: 11
 *                       status:
 *                         type: string
 *                         description: The loan's status.
 *                         example: 'COMPLETED'
 *                       createdAt:
 *                         type: dateTime
 *                         description: created date.
 *                         example: '2023-09-22T21:49:13.202Z'
 *                       updatedAt:
 *                         type: dateTime
 *                         description: created date.
 *                         example: '2023-09-22T21:49:13.202Z'
 *
 */
router.post("/seed", seedUserLoan);
/**
 * @swagger
 * /user-loan/pending:
 *   get:
 *     summary: Get a list of all pending loans
 *     description: Retrieve a list of all pending loans.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Pending Loans"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The id.
 *                         example: "1iej"
 *                       userId:
 *                         type: string
 *                         description: The user ID.
 *                         example: "1"
 *                       name:
 *                         type: string
 *                         description: The loan's name.
 *                         example: Leanne Graham
 *                       loanAmount:
 *                         type: number
 *                         description: The loan's amount.
 *                         example: 199
 *                       loanDuration:
 *                         type: number
 *                         description: The loan's duration in month.
 *                         example: 11
 *                       interestRate:
 *                         type: number
 *                         description: The loan's interest rate in percent.
 *                         example: 11
 *                       status:
 *                         type: string
 *                         description: The loan's status.
 *                         example: 'COMPLETED'
 *                       createdAt:
 *                         type: dateTime
 *                         description: created date.
 *                         example: '2023-09-22T21:49:13.202Z'
 *                       updatedAt:
 *                         type: dateTime
 *                         description: created date.
 *                         example: '2023-09-22T21:49:13.202Z'
 */
router.get("/pending", pendingUserLoan);
/**
 * @swagger
 * /user-loan/pending/summary:
 *   get:
 *     summary: Get a pending loan summary
 *     description: Retrieve a pending loan summary.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Pending Loans"
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalLoanAmount:
 *                       type: number
 *                       description: The total loan's amount.
 *                       example: 199
 *                     totalPendingLoan:
 *                       type: number
 *                       description: The pending loan's.
 *                       example: 11
 */
router.get("/pending/summary", pendingUserLoanSummary);
/**
 * @swagger
 * /user-loan/active/summary:
 *   get:
 *     summary: Get a active loan summary
 *     description: Retrieve a active loan summary.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Active Loans"
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalLoanAmount:
 *                       type: number
 *                       description: The total loan's amount.
 *                       example: 199
 *                     totalActiveLoan:
 *                       type: number
 *                       description: The active loan.
 *                       example: 11
 */
router.get("/active/summary", activeUserLoanSummary);
/**
 * @swagger
 * /user-loan/active:
 *   get:
 *     summary: Get a list of all active loans
 *     description: Retrieve a list of all active loans.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Active Loans"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The id.
 *                         example: "1iej"
 *                       userId:
 *                         type: string
 *                         description: The user ID.
 *                         example: "1"
 *                       name:
 *                         type: string
 *                         description: The loan's name.
 *                         example: Leanne Graham
 *                       loanAmount:
 *                         type: number
 *                         description: The loan's amount.
 *                         example: 199
 *                       loanDuration:
 *                         type: number
 *                         description: The loan's duration in month.
 *                         example: 11
 *                       interestRate:
 *                         type: number
 *                         description: The loan's interest rate in percent.
 *                         example: 11
 *                       status:
 *                         type: string
 *                         description: The loan's status.
 *                         example: 'ACTIVE'
 *                       createdAt:
 *                         type: dateTime
 *                         description: created date.
 *                         example: '2023-09-22T21:49:13.202Z'
 *                       updatedAt:
 *                         type: dateTime
 *                         description: created date.
 *                         example: '2023-09-22T21:49:13.202Z'
 */
router.get("/active", activeUserLoan);

module.exports = router;
