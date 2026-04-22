import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { buildFaqJsonLd, buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    buildSeoMeta({
      title: "FAQ | Electrical Products, Services, Wholesale, and Delivery",
      description:
        "Find answers to common questions about Shuva Electric And Electronic products, electrician services, wholesale pricing, returns, and delivery in Kathmandu Valley.",
      path: "/faq",
      keywords: ["electrical shop FAQ Kathmandu", "wholesale electrical questions", "electrician service FAQ Nepal"],
    }),
  component: FAQPage,
});

const faqGroups = [
  {
    category: "Products & Orders",
    items: [
      {
        q: "Are your products genuine?",
        a: "Yes, all products are sourced from authorized distributors and come with full brand warranty.",
      },
      {
        q: "Can I return or exchange a product?",
        a: "Yes, unused products in original packaging can be returned or exchanged within 7 days of purchase with the receipt.",
      },
      {
        q: "Do you have a product catalog?",
        a: "Yes, visit our Products page to browse our catalog. For specific items, call or WhatsApp us.",
      },
      {
        q: "Can I order products online?",
        a: "Currently we take orders via phone, WhatsApp, or in-store. Online ordering is coming soon.",
      },
    ],
  },
  {
    category: "Delivery & Wholesale",
    items: [
      {
        q: "Do you deliver across Kathmandu Valley?",
        a: "Yes, we deliver to Kathmandu, Lalitpur, and Bhaktapur. Delivery is free for bulk orders.",
      },
      {
        q: "Do you offer wholesale pricing?",
        a: "Absolutely. We provide competitive bulk pricing for contractors, builders, and resellers. Contact our wholesale team for a quote.",
      },
      {
        q: "What is the minimum order for wholesale?",
        a: "Minimum order depends on the product category. Contact us for specific details.",
      },
      {
        q: "Can you supply products for a full construction project?",
        a: "Yes, we provide complete BOQ-based electrical supply for construction projects with delivery.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "Is same-day electrical support available?",
        a: "Yes, we offer same-day electrician visits for urgent issues within Kathmandu Valley.",
      },
      {
        q: "Can I book services and buy products from the same place?",
        a: "Yes. We provide both products and services, so you can get everything from one trusted source.",
      },
      {
        q: "Do you do electrical safety inspections?",
        a: "Yes, we offer complete electrical safety audits for homes and commercial properties.",
      },
      {
        q: "How do I book an electrician?",
        a: "Call us at 9843766006 or send a WhatsApp message. We'll schedule a visit at your convenience.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card shadow-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="font-medium text-foreground">{q}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 pb-5 pt-3">
          <p className="pl-8 text-sm text-muted-foreground">{a}</p>
        </div>
      )}
    </div>
  );
}

function FAQPage() {
  const allFaqItems = faqGroups.flatMap((group) => group.items);

  return (
    <main className="bg-surface py-14 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(allFaqItems)),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, services, and wholesale supply."
        />

        {faqGroups.map((group) => (
          <div key={group.category} className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-foreground">{group.category}</h3>
            <div className="space-y-3">
              {group.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
