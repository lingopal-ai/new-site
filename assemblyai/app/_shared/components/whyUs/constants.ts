import { Icons } from "@assets";

const data: {
  title: string;
  Icon: any;
  description: string;
  actionLabel: string;
}[] = [
  {
    title: "Easy to integrate",
    Icon: Icons.EasyIntergrate,
    description:
      "Developers get immediate access to our API, and our documentation is crafted with detailed code examples and explanations, making it easy to quickly integrate Speech AI into their applications.",
    actionLabel: "Learn more",
  },
  {
    title: "Pricing that scales",
    Icon: Icons.PricingScales,
    description:
      "Choose the AI models for your use case and only pay for what you use. We work with you to ensure pricing scales as you grow",
    actionLabel: "View pricing",
  },
  {
    title: "Always up-to-date",
    Icon: Icons.UptoDate,
    description:
      "Stay on top of the latest AI breakthroughs. Our Speech AI team of researchers and engineers is constantly improving and updating our AI models so you always have access to state-of-the-art AI technology.",
    actionLabel: "View blog",
  },
  {
    title: "24/7 customer support",
    Icon: Icons.CustomerSupport,
    description:
      "Leverage our team of AI experts who can help build with you and accelerate your product roadmap.",
    actionLabel: "Join our Discord",
  },
];

export { data };
