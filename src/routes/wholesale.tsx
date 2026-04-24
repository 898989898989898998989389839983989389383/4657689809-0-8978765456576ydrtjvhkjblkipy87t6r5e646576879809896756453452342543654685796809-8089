import {
  Truck,
  ShieldCheck,
  Users,
  FileText,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

const benefits = [
  {
    icon: Truck,
    title: "Local Delivery",
    desc: "Free delivery for bulk orders across Kathmandu Valley",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "100% authorized products with full warranty",
  },
  { icon: Users, title: "Dedicated Support", desc: "Assigned account manager for repeat clients" },
  {
    icon: FileText,
    title: "BOQ & Quotation",
    desc: "Quick quotation support for project BOQ requirements",
  },
];

export default function WholesalePage() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });

  return (
    <main className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          badge="Wholesale"
          title="Bulk Orders & Project Supply"
          description="Competitive pricing for contractors, electricians, builders, and resellers. Get a quote today."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15">
                <b.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-card p-8 shadow-card lg:p-10">
          <h3 className="mb-6 text-xl font-bold text-foreground">What We Supply in Bulk</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Wires & Cables",
              "MCBs & RCCBs",
              "Distribution Boards",
              "Switches & Sockets",
              "LED Lights, Panels, and Lighting Items",
              "Jhumar, Chandeliers, and Decorative Lights",
              "Ceiling & Exhaust Fans",
              "Conduit Pipes & Fittings",
              "Earthing Solutions",
              "Electrical Tools",
              "CCTV & Safety Products",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-surface p-3">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Request a Quick Quote</h3>
            <p className="mt-2 text-muted-foreground">
              Fill in the form and our wholesale team will get back to you within a few hours.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Phone className="h-4 w-4 text-primary" /> 9843766006
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp: 9843766006
              </div>
            </div>
          </div>
          <form
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="text"
              placeholder="Company / Project Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="What products do you need? Include quantities if possible."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
