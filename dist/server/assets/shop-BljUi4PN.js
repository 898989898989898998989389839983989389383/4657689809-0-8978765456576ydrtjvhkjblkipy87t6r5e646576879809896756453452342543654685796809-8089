import { jsx, jsxs } from "react/jsx-runtime";
import { Search, Zap, Star } from "lucide-react";
import { S as SectionHeading } from "./SectionHeading-m4OBu233.js";
import { useState } from "react";
const categories = ["All", "Wires & Cables", "Switches", "Sockets", "LED Lights", "Fans", "MCBs", "Distribution Boards", "CCTV", "Tools", "Safety"];
const products = [{
  name: "Jhumar Crystal Hanging Light",
  category: "LED Lights",
  price: "Call for Price",
  rating: 4.9,
  desc: "Decorative jhumar light for premium living rooms and halls.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2gl-Uve5EMHjcTuF_2ws2hhz8QWEOtNIagg59jbl8i8stwLY_OStbXHigXM3a9TIueP_P4WU69zVy4NQh4Y-fybJtI7tbMjnB-8SegFLb1VMxu-b3qNYldYc8uzyKkrkc8ht8Dt5A1hiXqjn7U9DE-3fFmCCX7RVuumDDZryKyQtkrKi2JfdbLai3Kw/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%284%29.jpeg"
}, {
  name: "Jhumar Designer Pendant Light",
  category: "LED Lights",
  price: "Call for Price",
  rating: 4.8,
  desc: "Elegant statement jhumar for home and commercial interiors.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgU5ZA2MOE3eMDi6q-WC7RPyjeGWfZqUzSFKyp-7UnUfw40x4VgNOTTnYZtT8y5MWQ4XOzoFWLgQHq7pfLrMK-LjpcvKoigEbcaGlMxnytBKUY8_l6J62l7gDe3uo7Zh_eHcXAfAVBPdXg3gY4nDAZZW5AW5IkCvMK59PsGklDGIO4g6KP9CKHbhuvoNQ/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%283%29.jpeg"
}, {
  name: "Jhumar Luxury Ceiling Light",
  category: "LED Lights",
  price: "Call for Price",
  rating: 4.9,
  desc: "Premium hanging jhumar with decorative crystal styling.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXO40d0lXxlKijWfY1qDdxfQmockdJQHwR_y73TUqdPADUpJ32z8QoQPcFZ4YlTHYms4DTeG_QZQrXQ8Ucd893HdGxy-DCPxI7GrZqfbZ3e1GOYfyhoNPeCzPl8tds9Wq67Oih5e-6xtJ18NTBKWkcuKE0ESBn47JzX0n5BbVSvsmqncZOEZGFiNt6tA/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%282%29.jpeg"
}, {
  name: "Jhumar Modern Hanging Fixture",
  category: "LED Lights",
  price: "Call for Price",
  rating: 4.7,
  desc: "Stylish jhumar lighting option for contemporary interiors.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5CjCUnvxJwzfL2tenGZdDsNbdMxARqbGgTTOMtPFZY3cKunQguLQQKomG59V2C6pT0CPp_-Q3vIqzD_yh74F4eqcUZvX-eqzhSI_omVwinLtNSeJEJ9XIw9NZHi-uqkRcbRpd6FvsTyHoa6vZMiv0ETUBA97YEwbhyNV32fyLKzG8A8e5Uv_uvMrJAw/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%281%29.jpeg"
}, {
  name: "Jhumar Decorative Chandelier",
  category: "LED Lights",
  price: "Call for Price",
  rating: 4.8,
  desc: "Decorative chandelier-style jhumar for feature lighting.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgR4SQJKMUX7qnzgJOPh9piVvO0K2o24Kw-HiiRu8kvzIAC1E8a7COCeolx3bwhnhuXeeg75J4FiQI5_h0uOWC-HO3tonlwFot-vY_eu_NmI_vmtku_FZLfleM7TN9HzeSbEt75H7-IqNyauSQe00dHvc2vRIwUZWQ05zG-KtdyXXNZnbedPKb1HfJn4w/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM.jpeg"
}, {
  name: "Copper Wire 1.5mm",
  category: "Wires & Cables",
  price: "Rs. 1,800/coil",
  rating: 4.8,
  desc: "ISI-standard copper wiring for residential use"
}, {
  name: "Copper Wire 2.5mm",
  category: "Wires & Cables",
  price: "Rs. 2,400/coil",
  rating: 4.9,
  desc: "Heavy-duty copper wire for power circuits"
}, {
  name: "Modular Switch 6A",
  category: "Switches",
  price: "Rs. 180",
  rating: 4.7,
  desc: "Premium modular switch with indicator"
}, {
  name: "Modular Switch 16A",
  category: "Switches",
  price: "Rs. 250",
  rating: 4.6,
  desc: "High-load switch for AC and geyser circuits"
}, {
  name: "Universal Socket 6A",
  category: "Sockets",
  price: "Rs. 150",
  rating: 4.5,
  desc: "Multi-pin universal socket module"
}, {
  name: "5-Pin Socket 16A",
  category: "Sockets",
  price: "Rs. 220",
  rating: 4.7,
  desc: "Heavy-duty socket for high-power appliances"
}, {
  name: "LED Panel Light 18W",
  category: "LED Lights",
  price: "Rs. 850",
  rating: 4.8,
  desc: "Slim round panel light, cool daylight"
}, {
  name: "LED Bulb 12W",
  category: "LED Lights",
  price: "Rs. 250",
  rating: 4.6,
  desc: "Energy-efficient LED bulb, long life"
}, {
  name: "LED Strip Light 5m",
  category: "LED Lights",
  price: "Rs. 1,200",
  rating: 4.5,
  desc: "Flexible RGB strip with controller"
}, {
  name: 'Ceiling Fan 48"',
  category: "Fans",
  price: "Rs. 3,200",
  rating: 4.7,
  desc: "High-speed ceiling fan, energy efficient"
}, {
  name: 'Exhaust Fan 8"',
  category: "Fans",
  price: "Rs. 1,400",
  rating: 4.5,
  desc: "Kitchen/bathroom ventilation fan"
}, {
  name: "MCB 16A Single Pole",
  category: "MCBs",
  price: "Rs. 280",
  rating: 4.8,
  desc: "Miniature circuit breaker for home circuits"
}, {
  name: "MCB 32A Single Pole",
  category: "MCBs",
  price: "Rs. 320",
  rating: 4.9,
  desc: "High-capacity MCB for AC and heavy loads"
}, {
  name: "RCCB 40A Double Pole",
  category: "MCBs",
  price: "Rs. 1,800",
  rating: 4.8,
  desc: "Earth leakage protection for safety"
}, {
  name: "Distribution Board 8-Way",
  category: "Distribution Boards",
  price: "Rs. 1,850",
  rating: 4.7,
  desc: "Metal DB with DIN rail and cover"
}, {
  name: "Distribution Board 12-Way",
  category: "Distribution Boards",
  price: "Rs. 2,400",
  rating: 4.6,
  desc: "Modular DB for offices and commercial use"
}, {
  name: "CCTV Camera Dome 2MP",
  category: "CCTV",
  price: "Rs. 2,800",
  rating: 4.5,
  desc: "Indoor dome camera with night vision"
}, {
  name: "CCTV DVR 4-Channel",
  category: "CCTV",
  price: "Rs. 5,500",
  rating: 4.6,
  desc: "4-channel digital video recorder"
}, {
  name: "Wire Stripper",
  category: "Tools",
  price: "Rs. 450",
  rating: 4.7,
  desc: "Professional wire stripping tool"
}, {
  name: "Multimeter Digital",
  category: "Tools",
  price: "Rs. 1,200",
  rating: 4.8,
  desc: "Digital multimeter for voltage/current testing"
}, {
  name: "Safety Gloves",
  category: "Safety",
  price: "Rs. 350",
  rating: 4.5,
  desc: "Electrical insulation safety gloves"
}, {
  name: "Safety Goggles",
  category: "Safety",
  price: "Rs. 250",
  rating: 4.4,
  desc: "Impact-resistant safety eyewear"
}];
function ShopPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = products.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  return /* @__PURE__ */ jsx("main", { className: "bg-surface py-14 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeading, { badge: "Product Catalog", title: "Electrical Products", description: "Browse our complete range of quality electrical products for homes, shops, and projects." }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mb-8 max-w-md", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search products...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-8 flex flex-wrap justify-center gap-2", children: categories.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(c), className: `rounded-full px-4 py-2 text-xs font-semibold transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:bg-secondary"}`, children: c }, c)) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filtered.map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-secondary", children: "image" in p && p.image ? /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, className: "h-full w-full object-cover", loading: "lazy", width: 960, height: 1280 }) : /* @__PURE__ */ jsx(Zap, { className: "h-8 w-8 text-primary/25" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-primary", children: p.category }),
      /* @__PURE__ */ jsx("h3", { className: "mt-1 font-semibold text-foreground", children: p.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: p.desc }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: p.rating })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-foreground", children: p.price }),
        /* @__PURE__ */ jsx("a", { href: "tel:+9779843766006", className: "rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground", children: "Call for Price" })
      ] })
    ] }, p.name)) }),
    filtered.length === 0 && /* @__PURE__ */ jsx("p", { className: "py-12 text-center text-muted-foreground", children: "No products found. Try a different search or category." })
  ] }) });
}
export {
  ShopPage as component
};
