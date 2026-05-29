import { Router, Request, Response } from "express";

const router = Router();

const solutions = [
  {
    id: "core-banking",
    title: "Core Banking CB7",
    slug: "core-banking",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize processes, improve employee productivity, and ensure full regulatory compliance.",
    features: [
      "Customer On-boarding",
      "Managing deposits and withdrawals",
      "Transaction management",
      "Interest Calculation",
      "Payments processing (cash, cheques, mandates, NEFT, RTGS etc.)",
      "CRM Activities",
      "Configuring New Banking Products",
      "Loan disbursed and Loan Management",
    ],
    icon: "🏦",
    category: "core",
  },
  {
    id: "digital-banking",
    title: "Digital Banking N7",
    slug: "digital-banking",
    description:
      "N7 brings full capabilities across strategy, human-centred design, data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    features: [
      "Fully compliant with regulatory requirements",
      "No legacy IT systems",
      "No traditional systems",
      "Paperless banking",
      "Digital transformation capability",
    ],
    icon: "📱",
    category: "digital",
  },
  {
    id: "open-banking",
    title: "Open Banking",
    slug: "open-banking",
    description:
      "Our API banking helps you to gain actionable insights, open account instantaneously, improve KYC and customer onboarding, account management, improve routing tools, and introduce enhanced credit scoring.",
    features: [
      "Actionable insights",
      "Instant account opening",
      "KYC automation",
      "Enhanced credit scoring",
      "API integrations",
    ],
    icon: "🔌",
    category: "api",
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    slug: "loan-origination",
    description:
      "N7 brings full capabilities across strategy, human-centred design, data science to create and deliver disruptive innovation specifically for loan origination.",
    features: [
      "Digital loan applications",
      "Automated underwriting",
      "Credit scoring",
      "Document management",
      "Compliance workflows",
    ],
    icon: "💰",
    category: "loans",
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    slug: "loan-management",
    description:
      "N7 brings full capabilities across strategy, human-centred design, data science to create and deliver disruptive innovation for loan management.",
    features: [
      "Loan portfolio management",
      "Repayment tracking",
      "Interest calculation",
      "Collections management",
      "Regulatory reporting",
    ],
    icon: "📋",
    category: "loans",
  },
];

// GET /api/solutions
router.get("/", (_req: Request, res: Response) => {
  res.json({ success: true, data: solutions });
});

// GET /api/solutions/:slug
router.get("/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) {
    return res.status(404).json({ success: false, error: "Solution not found" });
  }
  return res.json({ success: true, data: solution });
});

export default router;
