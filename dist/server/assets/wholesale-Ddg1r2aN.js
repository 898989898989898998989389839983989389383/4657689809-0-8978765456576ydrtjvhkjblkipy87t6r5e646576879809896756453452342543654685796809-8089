import { jsx, jsxs } from "react/jsx-runtime";
import { Truck, ShieldCheck, Users, FileText, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { S as SectionHeading } from "./SectionHeading-m4OBu233.js";
import { useState } from "react";
const benefits = [{
  icon: Truck,
  title: "Local Delivery",
  desc: "Free delivery for bulk orders across Kathmandu Valley"
}, {
  icon: ShieldCheck,
  title: "Genuine Products",
  desc: "100% authorized products with full warranty"
}, {
  icon: Users,
  title: "Dedicated Support",
  desc: "Assigned account manager for repeat clients"
}, {
  icon: FileText,
  title: "BOQ & Quotation",
  desc: "Quick quotation support for project BOQ requirements"
}];
function WholesalePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    message: ""
  });
  return /* @__PURE__ */ jsx("main", { className: "bg-surface py-14 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeading, { badge: "Wholesale", title: "Bulk Orders & Project Supply", description: "Competitive pricing for contractors, electricians, builders, and resellers. Get a quote today." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: benefits.map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15", children: /* @__PURE__ */ jsx(b.icon, { className: "h-6 w-6 text-gold" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: b.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc })
    ] }, b.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 rounded-2xl bg-card p-8 shadow-card lg:p-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-6 text-xl font-bold text-foreground", children: "What We Supply in Bulk" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: ["Wires & Cables", "MCBs & RCCBs", "Distribution Boards", "Switches & Sockets", "LED Lights, Panels, and Lighting Items", "Jhumar, Chandeliers, and Decorative Lights", "Ceiling & Exhaust Fans", "Conduit Pipes & Fittings", "Earthing Solutions", "Electrical Tools", "CCTV & Safety Products"].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-surface p-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: item })
      ] }, item)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground", children: "Request a Quick Quote" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Fill in the form and our wholesale team will get back to you within a few hours." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-foreground", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-primary" }),
            " 9843766006"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-foreground", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 text-primary" }),
            " WhatsApp: 9843766006"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Your Name", value: form.name, onChange: (e) => setForm({
          ...form,
          name: e.target.value
        }), className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" }),
        /* @__PURE__ */ jsx("input", { type: "tel", placeholder: "Phone Number", value: form.phone, onChange: (e) => setForm({
          ...form,
          phone: e.target.value
        }), className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" }),
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Company / Project Name", value: form.company, onChange: (e) => setForm({
          ...form,
          company: e.target.value
        }), className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" }),
        /* @__PURE__ */ jsx("textarea", { placeholder: "What products do you need? Include quantities if possible.", value: form.message, onChange: (e) => setForm({
          ...form,
          message: e.target.value
        }), rows: 4, className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90", children: "Submit Quote Request" })
      ] })
    ] })
  ] }) });
}
export {
  WholesalePage as component
};
