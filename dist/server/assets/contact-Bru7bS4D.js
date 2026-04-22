import { jsx, jsxs } from "react/jsx-runtime";
import { MapPin, Phone, MessageCircle, Mail, ReceiptText, Clock } from "lucide-react";
import { S as SectionHeading } from "./SectionHeading-m4OBu233.js";
import { useState } from "react";
function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });
  return /* @__PURE__ */ jsx("main", { className: "bg-surface py-14 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeading, { badge: "Contact", title: "Get in Touch", description: "Reach out to Shuva Electric And Electronic for product enquiries, service support, and wholesale requirements." }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold text-foreground", children: "Contact Information" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Address" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Old Baneshwor, Kathmandu" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Phone Numbers" }),
                /* @__PURE__ */ jsx("a", { href: "tel:+9779843766006", className: "block text-sm text-primary hover:underline", children: "9843766006" }),
                /* @__PURE__ */ jsx("a", { href: "tel:+9779806814962", className: "block text-sm text-primary hover:underline", children: "9806814962" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "mt-0.5 h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "WhatsApp" }),
                /* @__PURE__ */ jsx("a", { href: "https://wa.me/9779843766006", target: "_blank", rel: "noopener noreferrer", className: "text-sm text-primary hover:underline", children: "9843766006" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Email" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:shuvaelectric12@gmail.com", className: "text-sm text-primary hover:underline", children: "shuvaelectric12@gmail.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(ReceiptText, { className: "mt-0.5 h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "VAT Number" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "6075128686" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Clock, { className: "mt-0.5 h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Business Hours" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Sun - Fri: 9 AM - 7 PM" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saturday: 10 AM - 5 PM" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-card", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps?q=Old%20Baneshwor%2C%20Kathmandu&z=15&output=embed", width: "100%", height: "250", style: {
          border: 0
        }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Shuva Electric And Electronic location" }) })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "rounded-2xl border border-border bg-card p-6 shadow-card lg:p-8", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold text-foreground", children: "Send Us a Message" }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm text-muted-foreground", children: "Share your requirement and we will get back to you as soon as possible." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-foreground", children: "Your Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }), className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30", placeholder: "Enter your name" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-foreground", children: "Mobile Number" }),
            /* @__PURE__ */ jsx("input", { type: "tel", value: form.phone, onChange: (e) => setForm({
              ...form,
              phone: e.target.value
            }), className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30", placeholder: "98XXXXXXXX" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-foreground", children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { value: form.message, onChange: (e) => setForm({
              ...form,
              message: e.target.value
            }), rows: 5, className: "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30", placeholder: "Tell us what you need..." })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90", children: "Send Message" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
