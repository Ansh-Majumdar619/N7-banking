import { Router, Request, Response } from "express";

const router = Router();

const articles = [
  {
    id: "1",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    slug: "transition-traditional-digital",
    excerpt:
      "Transitioning from a traditional banking model to a digital-first approach requires careful planning, the right technology stack, and a cultural shift throughout the organization.",
    readTime: "8 min read",
    tags: ["digital banking", "transformation", "fintech"],
  },
  {
    id: "2",
    category: "GETTING STARTED",
    title: "The role of AI in modern core banking systems",
    author: "Sarah Chen",
    date: "12/08/24",
    slug: "ai-core-banking",
    excerpt:
      "Artificial Intelligence is reshaping the core banking landscape, from automated credit decisions to personalized customer experiences.",
    readTime: "6 min read",
    tags: ["AI", "core banking", "automation"],
  },
  {
    id: "3",
    category: "REGULATORY",
    title: "Navigating AML compliance in digital banking",
    author: "James Okafor",
    date: "05/08/24",
    slug: "aml-compliance-digital",
    excerpt:
      "Anti-money laundering regulations continue to evolve. Here's how digital banks can stay compliant while delivering great user experiences.",
    readTime: "10 min read",
    tags: ["compliance", "AML", "regulation"],
  },
  {
    id: "4",
    category: "TECHNOLOGY",
    title: "Open banking APIs: the future of financial services",
    author: "Priya Sharma",
    date: "01/08/24",
    slug: "open-banking-apis",
    excerpt:
      "Open banking is unlocking new possibilities for financial institutions. APIs are the key to building a connected financial ecosystem.",
    readTime: "7 min read",
    tags: ["API", "open banking", "innovation"],
  },
];

const caseStudies = [
  {
    id: "1",
    category: "CASE STUDY",
    title: "How we help brand reach out to more people",
    company: "Zoomcar",
    companyLogo: "Z",
    slug: "zoomcar-case-study",
    excerpt:
      "Zoomcar partnered with N7 to transform their payment infrastructure, resulting in a 40% increase in successful transactions and improved customer satisfaction.",
    results: ["40% increase in transactions", "60% reduction in payment failures", "3x faster onboarding"],
  },
];

// GET /api/insights/articles
router.get("/articles", (_req: Request, res: Response) => {
  res.json({ success: true, data: articles });
});

// GET /api/insights/articles/:slug
router.get("/articles/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return res.status(404).json({ success: false, error: "Article not found" });
  }
  return res.json({ success: true, data: article });
});

// GET /api/insights/case-studies
router.get("/case-studies", (_req: Request, res: Response) => {
  res.json({ success: true, data: caseStudies });
});

// GET /api/insights/case-studies/:slug
router.get("/case-studies/:slug", (req: Request, res: Response) => {
  const { slug } = req.params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) {
    return res.status(404).json({ success: false, error: "Case study not found" });
  }
  return res.json({ success: true, data: study });
});

export default router;
