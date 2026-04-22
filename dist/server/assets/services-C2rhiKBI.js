import { jsx, jsxs } from "react/jsx-runtime";
import { Home, Building, Wrench, Lightbulb, Zap, ShieldCheck, Camera, BatteryCharging, Phone, MessageCircle } from "lucide-react";
import { S as SectionHeading } from "./SectionHeading-m4OBu233.js";
const servicesList = [{
  icon: Home,
  title: "House Wiring",
  desc: "Complete electrical wiring for new houses, renovations, and rewiring. We use genuine branded wires and follow safety standards."
}, {
  icon: Building,
  title: "Office & Shop Wiring",
  desc: "Professional electrical setup for offices, shops, restaurants, and commercial spaces with clean cable management."
}, {
  icon: Wrench,
  title: "Maintenance & Repair",
  desc: "Quick troubleshooting and repair for power failures, short circuits, faulty switches, and other electrical issues."
}, {
  icon: Lightbulb,
  title: "Lighting Installation",
  desc: "LED panel lights, chandeliers, strip lights, outdoor lighting. We handle the complete installation."
}, {
  icon: Zap,
  title: "Panel Board Work",
  desc: "Distribution board installation, MCB/RCCB fitting, load balancing, and electrical panel upgrades."
}, {
  icon: ShieldCheck,
  title: "Safety Inspection",
  desc: "Complete electrical safety audit for homes and commercial spaces. Identify risks and get a detailed report."
}, {
  icon: Camera,
  title: "CCTV Wiring & Installation",
  desc: "Complete CCTV cable routing, camera fitting, and setup for homes, offices, shops, and other commercial spaces."
}, {
  icon: BatteryCharging,
  title: "Inverter Battery Installation",
  desc: "Safe inverter and battery installation with proper connection, testing, and backup power setup guidance."
}, {
  icon: Wrench,
  title: "Electrician Visit",
  desc: "Book a skilled electrician for any small or large electrical task. Same-day service available in Kathmandu Valley."
}, {
  icon: Building,
  title: "Project Electrical Supply",
  desc: "Complete electrical supply for construction projects with consultation, BOQ support, and delivery."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsx("main", { className: "bg-surface py-14 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeading, { badge: "Our Services", title: "Professional Electrical Services", description: "Skilled electricians, genuine products, and reliable service across Kathmandu Valley." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: servicesList.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end border-t border-border pt-3", children: /* @__PURE__ */ jsxs("a", { href: "tel:+9779843766006", className: "text-xs font-semibold text-primary hover:underline", children: [
        "Book Now ",
        "->"
      ] }) })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 rounded-2xl bg-gradient-hero p-8 text-center lg:p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary-foreground sm:text-3xl", children: "Need an Electrician?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-lg text-primary-foreground/80", children: "Call us or send a WhatsApp message for quick service booking. Same-day support available." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "tel:+9779843766006", className: "inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
          " Call Now"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://wa.me/9779843766006", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp"
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ServicesPage as component
};
