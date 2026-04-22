import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Wrench,
  ShieldCheck,
  Lightbulb,
  Building,
  Home,
  Phone,
  MessageCircle,
  Camera,
  BatteryCharging,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    buildSeoMeta({
      title: "Electrical Services in Kathmandu | House Wiring, Repairs, Panels",
      description:
        "Professional electrical services in Kathmandu including house wiring, office setup, maintenance, lighting installation, panel board work, and safety inspections.",
      path: "/services",
      keywords: ["electrician Kathmandu", "house wiring Kathmandu", "electrical repair Kathmandu"],
    }),
  component: ServicesPage,
});

const servicesList = [
  {
    icon: Home,
    title: "House Wiring",
    desc: "Complete electrical wiring for new houses, renovations, and rewiring. We use genuine branded wires and follow safety standards.",
  },
  {
    icon: Building,
    title: "Office & Shop Wiring",
    desc: "Professional electrical setup for offices, shops, restaurants, and commercial spaces with clean cable management.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    desc: "Quick troubleshooting and repair for power failures, short circuits, faulty switches, and other electrical issues.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    desc: "LED panel lights, chandeliers, strip lights, outdoor lighting. We handle the complete installation.",
  },
  {
    icon: Zap,
    title: "Panel Board Work",
    desc: "Distribution board installation, MCB/RCCB fitting, load balancing, and electrical panel upgrades.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspection",
    desc: "Complete electrical safety audit for homes and commercial spaces. Identify risks and get a detailed report.",
  },
  {
    icon: Camera,
    title: "CCTV Wiring & Installation",
    desc: "Complete CCTV cable routing, camera fitting, and setup for homes, offices, shops, and other commercial spaces.",
  },
  {
    icon: BatteryCharging,
    title: "Inverter Battery Installation",
    desc: "Safe inverter and battery installation with proper connection, testing, and backup power setup guidance.",
  },
  {
    icon: Wrench,
    title: "Electrician Visit",
    desc: "Book a skilled electrician for any small or large electrical task. Same-day service available in Kathmandu Valley.",
  },
  {
    icon: Building,
    title: "Project Electrical Supply",
    desc: "Complete electrical supply for construction projects with consultation, BOQ support, and delivery.",
  },
] as const;

function ServicesPage() {
  return (
    <main className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Professional Electrical Services"
          description="Skilled electricians, genuine products, and reliable service across Kathmandu Valley."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center justify-end border-t border-border pt-3">
                <a
                  href="tel:+9779843766006"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Book Now {"->"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-hero p-8 text-center lg:p-12">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Need an Electrician?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
            Call us or send a WhatsApp message for quick service booking. Same-day support
            available.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+9779843766006"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href="https://wa.me/9779843766006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
