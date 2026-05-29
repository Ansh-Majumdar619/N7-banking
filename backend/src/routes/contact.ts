import { Router, Request, Response } from "express";

const router = Router();

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  requestType: "demo" | "contact" | "partnership";
}

function validateContact(body: ContactPayload): string[] {
  const errors: string[] = [];
  if (!body.name || body.name.trim().length < 2) errors.push("Name must be at least 2 characters");
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.push("Valid email is required");
  if (!body.message || body.message.trim().length < 10) errors.push("Message must be at least 10 characters");
  if (!["demo", "contact", "partnership"].includes(body.requestType)) errors.push("Invalid request type");
  return errors;
}

// POST /api/contact
router.post("/", (req: Request, res: Response) => {
  const body = req.body as ContactPayload;
  const errors = validateContact(body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // In a real app, you'd send an email or save to DB here
  console.log("📧 New contact request:", {
    name: body.name,
    email: body.email,
    company: body.company,
    requestType: body.requestType,
  });

  return res.json({
    success: true,
    message: "Thank you! We'll get back to you within 24 hours.",
    data: {
      id: `REQ-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    },
  });
});

// POST /api/contact/demo
router.post("/demo", (req: Request, res: Response) => {
  const body = req.body as ContactPayload;

  if (!body.name || !body.email) {
    return res.status(400).json({ success: false, error: "Name and email are required" });
  }

  return res.json({
    success: true,
    message: "Demo request received! Our team will contact you within 1 business day.",
    data: {
      id: `DEMO-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      scheduledCallback: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    },
  });
});

export default router;
