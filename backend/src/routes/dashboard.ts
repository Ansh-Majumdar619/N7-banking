import { Router, Request, Response } from "express";

const router = Router();

// Mock dashboard data
const amlData = {
  totalSTR: 450,
  daysPendingAML: 3,
  suspiciousTransactions: {
    date: "10-01-2022",
    breakdown: [
      { label: "Reason 1", value: 180, color: "#1E6FFF", percentage: 40 },
      { label: "Reason 2", value: 157, color: "#FF2D78", percentage: 35 },
      { label: "Reason 3", value: 113, color: "#00E5FF", percentage: 25 },
    ],
  },
  strSummary: [
    { date: "5 Nov 2023", channelCrew: 300, totalSuspicion: 185 },
    { date: "6 Nov 2023", channelCrew: 250, totalSuspicion: 160 },
    { date: "7 Nov 2023", channelCrew: 400, totalSuspicion: 220 },
    { date: "10 Nov 2023", channelCrew: 350, totalSuspicion: 200 },
    { date: "11 Nov 2023", channelCrew: 280, totalSuspicion: 175 },
  ],
  amlReport: [
    { id: "235", branchId: "Branch 1", identifiedDate: "02-01-2022", transactionDate: "27-12-2022", mode: "AO", amount: 70, transactions: 75 },
    { id: "188", branchId: "Branch 2", identifiedDate: "02-01-2022", transactionDate: "31-12-2022", mode: "46", amount: 160, transactions: 180 },
    { id: "200", branchId: "Branch 3", identifiedDate: "02-01-2022", transactionDate: "31-12-2022", mode: "48", amount: 60, transactions: 68 },
    { id: "198", branchId: "Branch 3", identifiedDate: "02-01-2022", transactionDate: "02-01-2022", mode: "UB2", amount: 152, transactions: 152 },
    { id: "087", branchId: "Branch 8", identifiedDate: "02-01-2022", transactionDate: "08-01-2022", mode: "182", amount: 40, transactions: 160 },
    { id: "140", branchId: "Branch 5", identifiedDate: "02-01-2022", transactionDate: "28-01-2022", mode: "G22", amount: 160, transactions: 180 },
  ],
};

const walletData = {
  user: { name: "Toni Kross", greeting: "Good Morning" },
  totalBalance: 42295.0,
  currency: "USD",
  recentActivity: [
    { id: "1", type: "debit", description: "To Jin · Work", date: "12 Jun 2022", amount: -59, category: "Work" },
    { id: "2", type: "credit", description: "From Google · Salary", date: "10 Jun 2022", amount: 859, category: "Salary" },
    { id: "3", type: "debit", description: "To David · Work", date: "1 Jun 2022", amount: -499, category: "Work" },
    { id: "4", type: "credit", description: "From Google · Bonus", date: "1 Jun 2022", amount: 859, category: "Bonus" },
  ],
};

const weeklySummary = {
  user: "Ritesh",
  cards: [
    { id: "card-1", last4: "2856", balance: 2856.78, type: "credit" },
    { id: "card-2", last4: "5799", balance: 5799.0, type: "debit" },
    { id: "card-3", last4: "0002", balance: 247.0, type: "savings" },
  ],
  goals: [
    { label: "Vacation", target: 350, progress: 0.52 },
    { label: "Renovation", target: 820, progress: 0.74 },
    { label: "Xbox", target: 820, progress: 0.34 },
  ],
  outcomeStatistics: [
    { label: "Spending", percentage: 52 },
    { label: "Savings", percentage: 24 },
    { label: "Investments", percentage: 74 },
  ],
  transactionHistory: [
    { name: "Trent Barks", amount: 87.67, type: "debit" },
    { name: "Clarinda Olivia", amount: 92.64, type: "debit" },
    { name: "Flora Olivia", amount: 45.00, type: "credit" },
    { name: "Luna Bernstein", amount: 36.00, type: "debit" },
  ],
};

// GET /api/dashboard/aml
router.get("/aml", (_req: Request, res: Response) => {
  res.json({ success: true, data: amlData });
});

// GET /api/dashboard/wallet
router.get("/wallet", (_req: Request, res: Response) => {
  res.json({ success: true, data: walletData });
});

// GET /api/dashboard/weekly-summary
router.get("/weekly-summary", (_req: Request, res: Response) => {
  res.json({ success: true, data: weeklySummary });
});

// GET /api/dashboard/transactions
router.get("/transactions", (req: Request, res: Response) => {
  const { period = "week" } = req.query;

  const transactions = walletData.recentActivity.map((t) => ({
    ...t,
    period,
  }));

  res.json({ success: true, data: transactions, period });
});

export default router;
