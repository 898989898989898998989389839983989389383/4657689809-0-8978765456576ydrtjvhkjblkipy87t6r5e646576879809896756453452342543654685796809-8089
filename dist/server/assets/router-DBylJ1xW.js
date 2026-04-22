import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, useLocation, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Phone, X, Menu, MapPin, Mail } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Logo({
  className,
  subtitle,
  subtitleClassName
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-3", className), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/logo.png",
        alt: "Shuva Electric And Electronic logo",
        className: "logo-glow h-14 w-auto max-w-[11rem] shrink-0 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]",
        loading: "eager"
      }
    ),
    subtitle ? /* @__PURE__ */ jsx("span", { className: cn("mt-1 block text-[11px] text-muted-foreground", subtitleClassName), children: subtitle }) : null
  ] }) });
}
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-orange-300/60 bg-orange-500/95 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(Logo, { subtitle: "Old Baneshwor, Kathmandu", className: "gap-2.5" }) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: navLinks.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white",
          activeProps: { className: "!bg-white/20 !text-white font-semibold" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/9779843766006",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 xl:inline-flex",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
              "WhatsApp 9843766006"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+9779843766006",
            className: "hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50 sm:inline-flex",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
              "Call Now"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen(!open),
            className: "rounded-md p-2 text-white lg:hidden",
            "aria-label": "Toggle menu",
            children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxs("nav", { className: "border-t border-orange-300/60 bg-orange-500 px-4 pb-4 pt-2 lg:hidden", children: [
      navLinks.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "block rounded-md px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white",
          activeProps: { className: "!bg-white/20 !text-white font-semibold" },
          onClick: () => setOpen(false),
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://wa.me/9779843766006",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-2 flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
            "WhatsApp 9843766006"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "tel:+9779843766006",
          className: "mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-orange-600",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            "Call Now"
          ]
        }
      )
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-orange-300/60 bg-orange-500 text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          Logo,
          {
            className: "mb-4",
            textClassName: "text-white",
            subtitle: "Powering homes, shops, and projects across Kathmandu Valley",
            subtitleClassName: "text-white/75"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-white/80", children: "Your trusted electrical products and services partner in Kathmandu Valley. Retail, wholesale, and professional services." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-white/65", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm text-white/85", children: [
          { to: "/shop", label: "Products" },
          { to: "/services", label: "Services" },
          { to: "/wholesale", label: "Wholesale" },
          { to: "/brands", label: "Brands" },
          { to: "/about", label: "About Us" },
          { to: "/faq", label: "FAQ" }
        ].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "transition-colors hover:text-white", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-white/65", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-white/85", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }),
            "Old Baneshwor, Kathmandu"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0" }),
            "9843766006, 9806814962"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0" }),
            "shuvaelectric12@gmail.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-white/65", children: "Business Hours" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/85", children: [
          /* @__PURE__ */ jsx("li", { children: "Sun - Fri: 9:00 AM - 7:00 PM" }),
          /* @__PURE__ */ jsx("li", { children: "Saturday: 10:00 AM - 5:00 PM" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-white/70", children: "Serving Kathmandu, Lalitpur & Bhaktapur" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/65", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Shuva Electric And Electronic. All rights reserved."
    ] })
  ] }) });
}
const sparkColors = [
  "rgba(255, 211, 105, 0.95)",
  "rgba(32, 71, 168, 0.95)",
  "rgba(255, 242, 196, 0.98)"
];
function CursorTrail() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [sparks, setSparks] = useState([]);
  const lastPoint = useRef({ x: 0, y: 0 });
  const sparkId = useRef(0);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;
    const mediaQueries = [
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(prefers-reduced-motion: no-preference)")
    ];
    const syncEnabled = () => {
      setEnabled(mediaQueries.every((query) => query.matches));
    };
    syncEnabled();
    mediaQueries.forEach((query) => query.addEventListener("change", syncEnabled));
    return () => {
      mediaQueries.forEach((query) => query.removeEventListener("change", syncEnabled));
    };
  }, [mounted]);
  useEffect(() => {
    if (!enabled) {
      setCursor({ x: 0, y: 0, visible: false });
      setSparks([]);
      return;
    }
    const removeSpark = (id) => {
      setSparks((current) => current.filter((spark) => spark.id !== id));
    };
    const handleMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCursor({ x, y, visible: true });
      const dx = x - lastPoint.current.x;
      const dy = y - lastPoint.current.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 16) return;
      lastPoint.current = { x, y };
      const sparkCount = Math.min(3, Math.max(1, Math.round(distance / 22)));
      const nextSparks = Array.from({ length: sparkCount }, (_, index) => {
        const id = sparkId.current++;
        const offsetX = (Math.random() - 0.5) * 18 - dx * 0.08;
        const offsetY = (Math.random() - 0.5) * 18 - dy * 0.08;
        const spark = {
          id,
          x: x + offsetX,
          y: y + offsetY,
          size: 6 + Math.random() * 10,
          rotation: Math.random() * 360,
          duration: 520 + Math.random() * 360,
          color: sparkColors[(sparkId.current + index) % sparkColors.length]
        };
        window.setTimeout(() => removeSpark(id), spark.duration);
        return spark;
      });
      setSparks((current) => [...current.slice(-14), ...nextSparks]);
    };
    const handleLeave = () => {
      setCursor((current) => ({ ...current, visible: false }));
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [enabled]);
  if (!mounted || !enabled) return null;
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-[80] overflow-hidden", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `cursor-orb ${cursor.visible ? "opacity-100" : "opacity-0"}`,
        style: {
          transform: `translate3d(${cursor.x - 18}px, ${cursor.y - 18}px, 0)`
        }
      }
    ),
    sparks.map((spark) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "cursor-spark",
        style: {
          left: `${spark.x}px`,
          top: `${spark.y}px`,
          width: `${spark.size}px`,
          height: `${spark.size}px`,
          "--spark-color": spark.color,
          "--spark-rotation": `${spark.rotation}deg`,
          "--spark-duration": `${spark.duration}ms`
        }
      },
      spark.id
    ))
  ] });
}
const defaultKeywords = [
  "electrical shop Kathmandu",
  "electrical products Nepal",
  "electrical services Kathmandu",
  "wholesale electrical supplies",
  "Shuva Electric And Electronic",
  "Old Baneshwor electrical store"
];
const siteName = "Shuva Electric And Electronic";
const siteTitle = "Shuva Electric And Electronic | Electrical Products & Services in Kathmandu";
const siteDescription = "Trusted electrical products, showroom guidance, wholesale supply, and electrical services in Old Baneshwor, Kathmandu.";
const siteLocale = "en_NP";
const defaultOgImage = "/logo.png";
const businessInfo = {
  name: siteName,
  description: siteDescription,
  phone: ["+977-9843766006", "+977-9806814962"],
  email: "shuvaelectric12@gmail.com",
  addressLocality: "Kathmandu",
  streetAddress: "Old Baneshwor",
  addressCountry: "NP",
  openingHours: ["Su-Fr 09:00-19:00", "Sa 10:00-17:00"],
  priceRange: "$$"
};
function buildSeoMeta(input) {
  const keywords = [...defaultKeywords, ...input.keywords ?? []];
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { name: "keywords", content: keywords.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: siteLocale },
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:type", content: input.type ?? "website" },
      { property: "og:url", content: input.path },
      { property: "og:image", content: defaultOgImage },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: defaultOgImage }
    ],
    links: [{ rel: "canonical", href: input.path }]
  };
}
function buildLocalBusinessJsonLd(pathname) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${pathname}#localbusiness`,
        name: businessInfo.name,
        description: businessInfo.description,
        image: defaultOgImage,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        priceRange: businessInfo.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.streetAddress,
          addressLocality: businessInfo.addressLocality,
          addressCountry: businessInfo.addressCountry
        },
        openingHours: businessInfo.openingHours,
        areaServed: ["Kathmandu", "Lalitpur", "Bhaktapur"]
      },
      {
        "@type": "WebSite",
        "@id": `${pathname}#website`,
        name: businessInfo.name,
        url: pathname
      }
    ]
  };
}
function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}
function buildFaqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}
const appCss = "/assets/styles-B-OSwFNx.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$8 = createRootRoute({
  head: () => ({
    ...buildSeoMeta({
      title: siteTitle,
      description: siteDescription,
      path: "/",
      keywords: [
        "electrical showroom Kathmandu",
        "electrical wholesale Kathmandu",
        "electrical repair Kathmandu"
      ]
    }),
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Shuva Electric And Electronic" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function TawkChatLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isBot = /bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent);
    if (isBot) return;
    if (document.querySelector('script[data-tawk-chat="true"]')) return;
    const loadTawk = () => {
      const existingScript = document.querySelector('script[data-tawk-chat="true"]');
      if (existingScript) return;
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = /* @__PURE__ */ new Date();
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/69e0745b3f5fe21c385b0479/1jmacd29b";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      script.setAttribute("data-tawk-chat", "true");
      document.body.appendChild(script);
    };
    let timeoutId;
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadTawk, { timeout: 4e3 });
    } else {
      timeoutId = window.setTimeout(loadTawk, 2500);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);
  return null;
}
function RootComponent() {
  const location = useLocation();
  const pathname = location.pathname || "/";
  const breadcrumbNameMap = {
    "/": "Home",
    "/shop": "Products",
    "/services": "Services",
    "/wholesale": "Wholesale",
    "/brands": "Brands",
    "/about": "About",
    "/contact": "Contact",
    "/faq": "FAQ"
  };
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    ...pathname !== "/" && breadcrumbNameMap[pathname] ? [{ name: breadcrumbNameMap[pathname], item: pathname }] : []
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(buildLocalBusinessJsonLd(pathname))
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems))
        }
      }
    ),
    /* @__PURE__ */ jsx(TawkChatLoader, {}),
    /* @__PURE__ */ jsx(CursorTrail, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./wholesale-Ddg1r2aN.js");
const Route$7 = createFileRoute("/wholesale")({
  head: () => buildSeoMeta({
    title: "Wholesale Electrical Supply in Kathmandu | Bulk Orders and Project Supply",
    description: "Get competitive wholesale electrical pricing for contractors, builders, electricians, institutions, and resellers with bulk supply support in Kathmandu Valley.",
    path: "/wholesale",
    keywords: ["wholesale electrical Kathmandu", "bulk electrical supply Nepal", "project electrical supplier Kathmandu"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./shop-BljUi4PN.js");
const Route$6 = createFileRoute("/shop")({
  head: () => buildSeoMeta({
    title: "Electrical Products in Kathmandu | Wires, Switches, LEDs, MCBs",
    description: "Browse electrical products from Shuva Electric And Electronic including wires, switches, sockets, LED lights, fans, MCBs, CCTV items, and safety tools.",
    path: "/shop",
    keywords: ["electrical products Kathmandu", "buy wires and cables Nepal", "switches and MCB Kathmandu"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services-C2rhiKBI.js");
const Route$5 = createFileRoute("/services")({
  head: () => buildSeoMeta({
    title: "Electrical Services in Kathmandu | House Wiring, Repairs, Panels",
    description: "Professional electrical services in Kathmandu including house wiring, office setup, maintenance, lighting installation, panel board work, and safety inspections.",
    path: "/services",
    keywords: ["electrician Kathmandu", "house wiring Kathmandu", "electrical repair Kathmandu"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./faq-Y0XI-wJN.js");
const Route$4 = createFileRoute("/faq")({
  head: () => buildSeoMeta({
    title: "FAQ | Electrical Products, Services, Wholesale, and Delivery",
    description: "Find answers to common questions about Shuva Electric And Electronic products, electrician services, wholesale pricing, returns, and delivery in Kathmandu Valley.",
    path: "/faq",
    keywords: ["electrical shop FAQ Kathmandu", "wholesale electrical questions", "electrician service FAQ Nepal"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-Bru7bS4D.js");
const Route$3 = createFileRoute("/contact")({
  head: () => buildSeoMeta({
    title: "Contact Shuva Electric And Electronic | Old Baneshwor, Kathmandu",
    description: "Contact Shuva Electric And Electronic for electrical product enquiries, electrician bookings, wholesale quotes, and showroom visits in Old Baneshwor, Kathmandu.",
    path: "/contact",
    keywords: ["contact electrical shop Kathmandu", "Shuva Electric phone number", "Old Baneshwor electrical store"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./brands-jY4MZf7Y.js");
const Route$2 = createFileRoute("/brands")({
  head: () => buildSeoMeta({
    title: "Electrical Brands We Carry | Havells, Schneider, Legrand, Philips",
    description: "Explore the trusted electrical brands available at Shuva Electric And Electronic including Havells, Schneider Electric, Legrand, Philips, Anchor, Polycab, and more.",
    path: "/brands",
    keywords: ["electrical brands Kathmandu", "Havells dealer Kathmandu", "Schneider Electric supplier Nepal"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DFJsgCfH.js");
const Route$1 = createFileRoute("/about")({
  head: () => buildSeoMeta({
    title: "About Shuva Electric And Electronic | Trusted Electrical Partner in Kathmandu",
    description: "Learn about Shuva Electric And Electronic, a trusted electrical products, wholesale supply, and service partner for homes, businesses, and project clients across Kathmandu Valley.",
    path: "/about",
    keywords: ["about Shuva Electric", "electrical company Kathmandu", "electrical supplier Old Baneshwor"]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dw7P_UV1.js");
const Route = createFileRoute("/")({
  head: () => buildSeoMeta({
    title: "Electrical Shop in Kathmandu | Products, Services, and Wholesale Supply",
    description: "Visit Shuva Electric And Electronic for electrical products, project supply, electrician services, and wholesale support in Old Baneshwor, Kathmandu.",
    path: "/",
    keywords: ["electrical shop Kathmandu", "electrical showroom Old Baneshwor", "electrical wholesale Nepal"]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WholesaleRoute = Route$7.update({
  id: "/wholesale",
  path: "/wholesale",
  getParentRoute: () => Route$8
});
const ShopRoute = Route$6.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const FaqRoute = Route$4.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const BrandsRoute = Route$2.update({
  id: "/brands",
  path: "/brands",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BrandsRoute,
  ContactRoute,
  FaqRoute,
  ServicesRoute,
  ShopRoute,
  WholesaleRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  buildFaqJsonLd as b,
  router as r
};
