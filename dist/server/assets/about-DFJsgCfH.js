import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Gem, ShieldCheck, Handshake, Lightbulb, Heart, MapPin, Users, Award, Clock3 } from "lucide-react";
import { h as heroImg } from "./hero-showroom-lOpUqXnv.js";
import { S as SectionHeading } from "./SectionHeading-m4OBu233.js";
const values = [{
  icon: ShieldCheck,
  title: "Genuine Products",
  desc: "We focus on trusted brands and dependable products people can buy with confidence."
}, {
  icon: Handshake,
  title: "Honest Guidance",
  desc: "We help customers choose the right option for their needs instead of pushing the most expensive one."
}, {
  icon: Lightbulb,
  title: "Practical Expertise",
  desc: "Our support is grounded in real installation, repair, and project experience."
}, {
  icon: Heart,
  title: "Local Commitment",
  desc: "We care about long-term trust with homeowners, electricians, contractors, and nearby businesses."
}];
const highlights = ["Retail showroom support for daily electrical needs", "Wholesale supply for contractors and repeat project orders", "Fast product guidance for homes, offices, and institutions", "Reliable service support across Kathmandu Valley"];
const milestones = [{
  value: "10+",
  label: "Years of local service"
}, {
  value: "5000+",
  label: "Customer conversations and orders supported"
}, {
  value: "12+",
  label: "Trusted electrical brands carried"
}, {
  value: "3",
  label: "Core valley districts regularly served"
}];
const reasons = [{
  icon: Users,
  title: "Built Around Relationships",
  desc: "Customers come back because they know they will get fair dealing, steady support, and responsive communication."
}, {
  icon: Award,
  title: "Balanced For Retail And Projects",
  desc: "We support both walk-in buyers and larger supply requirements without losing attention to detail."
}, {
  icon: Clock3,
  title: "Fast Local Coordination",
  desc: "When timing matters, nearby stock access and practical follow-up make a real difference."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-[linear-gradient(180deg,#f6f8fc_0%,#ffffff_18%,#f9fbff_52%,#fffaf2_100%)]", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[linear-gradient(135deg,#102657_0%,#173d8d_46%,#f0b44f_100%)]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,223,152,0.22),transparent_24%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.14),transparent_28%)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,34,0.18),rgba(5,13,34,0.48))]" }),
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Shuva Electric showroom", className: "absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-85", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24", children: /* @__PURE__ */ jsxs("div", { className: "grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr]", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            "About Shuva Electric And Electronic"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl", children: "Electrical supply and support built on trust, clarity, and local service" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg", children: "From our Old Baneshwor showroom to project and wholesale coordination across Kathmandu Valley, we focus on dependable products, practical guidance, and support people feel confident returning to." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5", children: "Contact Us" }),
            /* @__PURE__ */ jsxs("a", { href: "tel:+9779843766006", className: "inline-flex items-center justify-center gap-2 rounded-xl border border-white/24 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
              "Call Now"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: milestones.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-[1.75rem] border border-white/16 bg-white/12 p-6 text-white shadow-[0_28px_60px_-36px_rgba(0,0,0,0.7)] backdrop-blur-md", children: [
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold tracking-[-0.04em]", children: item.value }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-white/74", children: item.label })
        ] }, item.label)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "-mt-8 pb-4 sm:-mt-10 lg:-mt-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-5 lg:grid-cols-[1.05fr_0.95fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-white/70 bg-white/92 p-8 shadow-[0_28px_80px_-42px_rgba(17,41,104,0.28)] backdrop-blur lg:p-10", children: [
        /* @__PURE__ */ jsx(SectionHeading, { badge: "Our Story", title: "How we grew with our customers", description: "A local business shaped by consistency, practical support, and long-term trust.", center: false }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-sm leading-7 text-foreground/80 sm:text-base", children: [
          /* @__PURE__ */ jsx("p", { children: "Shuva Electric And Electronic started with a simple goal: make it easier for people to buy dependable electrical products and get the right guidance without confusion." }),
          /* @__PURE__ */ jsx("p", { children: "What began as a retail-focused relationship with local customers gradually grew into broader support for homeowners, electricians, contractors, colleges, offices, and commercial spaces." }),
          /* @__PURE__ */ jsx("p", { children: "Today, we support retail purchases, wholesale supply, and practical service coordination across Kathmandu Valley while keeping the same core approach: clear communication, fair pricing, and advice people can actually use." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-[1.6rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(18,40,92,0.04),rgba(255,203,108,0.18))] p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm", children: /* @__PURE__ */ jsx(Gem, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: "What makes the difference" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: "We combine showroom guidance, product sourcing, and practical field understanding so customers can choose faster and with more confidence." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_28px_80px_-44px_rgba(17,41,104,0.28)]", children: /* @__PURE__ */ jsxs("div", { className: "relative min-h-[320px] sm:min-h-[380px]", children: [
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Inside Shuva Electric showroom", className: "h-full w-full object-cover", loading: "lazy", width: 1280, height: 900 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,45,0.06),rgba(10,20,45,0.5))]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 p-6 sm:p-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[1.7rem] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-md", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-white/74", children: "Showroom + Support" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 text-2xl font-bold leading-tight", children: "A place where product advice feels practical, not overwhelming" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/82", children: "Customers visit us to compare options clearly, understand what fits the job, and get recommendations that match real budgets and timelines." })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { badge: "What We Support", title: "What people come to us for", description: "A dependable mix of retail help, supply support, and practical coordination." }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4", children: highlights.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-[1.75rem] border border-white/75 bg-white/90 p-6 shadow-[0_22px_60px_-36px_rgba(17,41,104,0.24)] backdrop-blur", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(32,71,168,0.12),rgba(255,198,92,0.22))]", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-7 text-foreground/82", children: item })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white/70 py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { badge: "Our Values", title: "What shapes the way we work", description: "The standards we try to bring into every recommendation, order, and follow-up." }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4", children: values.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-[1.85rem] border border-border bg-white p-6 shadow-[0_22px_60px_-38px_rgba(17,41,104,0.22)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(17,41,104,0.3)]", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10", children: /* @__PURE__ */ jsx(item.icon, { className: "h-7 w-7 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: item.desc })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[2.2rem] border border-border bg-white shadow-[0_30px_80px_-44px_rgba(17,41,104,0.28)]", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-0 lg:grid-cols-[0.92fr_1.08fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-gold p-8 text-gold-foreground lg:p-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-full border border-gold-foreground/15 bg-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em]", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight", children: "Local support that feels steady, clear, and useful" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-gold-foreground/82 sm:text-base", children: "We aim to be the kind of electrical partner people can return to with confidence, whether the need is simple, urgent, or part of a larger project." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-[1.5rem] border border-gold-foreground/15 bg-white/18 p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm leading-7 text-gold-foreground/88", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsx("p", { children: "Visit us in Old Baneshwor for quick comparisons, practical guidance, and support for both daily purchases and project requirements." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 p-8 lg:p-10", children: reasons.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-[1.6rem] border border-border bg-surface p-5 transition-colors hover:bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: item.desc })
        ] })
      ] }) }, item.title)) })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-16 lg:pb-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-border bg-white px-8 py-10 shadow-[0_26px_70px_-42px_rgba(17,41,104,0.26)] lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
          "Visit Or Contact Us"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold text-foreground", children: "Want to know more about our products or support?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-muted-foreground sm:text-base", children: "Visit us at Old Baneshwor, call for quick guidance, or send us your enquiry for retail, wholesale, or service support." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3 lg:mt-0", children: [
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("a", { href: "tel:+9779843766006", className: "inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
          "Call Now"
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as component
};
