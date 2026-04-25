import { ChevronLeft, ChevronRight, MessageCircle, Phone, Search, Star, X, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

const categories = [
  "All",
  "Wires & Cables",
  "Switches",
  "Sockets",
  "LED Lights",
  "Fans",
  "MCBs",
  "Distribution Boards",
  "CCTV",
  "Tools",
  "Safety",
];

const products = [
  {
    name: "Jhumar Crystal Hanging Light",
    category: "LED Lights",
    price: "Call for Price",
    rating: 4.9,
    desc: "Decorative jhumar light for premium living rooms and halls.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2gl-Uve5EMHjcTuF_2ws2hhz8QWEOtNIagg59jbl8i8stwLY_OStbXHigXM3a9TIueP_P4WU69zVy4NQh4Y-fybJtI7tbMjnB-8SegFLb1VMxu-b3qNYldYc8uzyKkrkc8ht8Dt5A1hiXqjn7U9DE-3fFmCCX7RVuumDDZryKyQtkrKi2JfdbLai3Kw/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%284%29.jpeg",
  },
  {
    name: "Jhumar Designer Pendant Light",
    category: "LED Lights",
    price: "Call for Price",
    rating: 4.8,
    desc: "Elegant statement jhumar for home and commercial interiors.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgU5ZA2MOE3eMDi6q-WC7RPyjeGWfZqUzSFKyp-7UnUfw40x4VgNOTTnYZtT8y5MWQ4XOzoFWLgQHq7pfLrMK-LjpcvKoigEbcaGlMxnytBKUY8_l6J62l7gDe3uo7Zh_eHcXAfAVBPdXg3gY4nDAZZW5AW5IkCvMK59PsGklDGIO4g6KP9CKHbhuvoNQ/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%283%29.jpeg",
  },
  {
    name: "Jhumar Luxury Ceiling Light",
    category: "LED Lights",
    price: "Call for Price",
    rating: 4.9,
    desc: "Premium hanging jhumar with decorative crystal styling.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXO40d0lXxlKijWfY1qDdxfQmockdJQHwR_y73TUqdPADUpJ32z8QoQPcFZ4YlTHYms4DTeG_QZQrXQ8Ucd893HdGxy-DCPxI7GrZqfbZ3e1GOYfyhoNPeCzPl8tds9Wq67Oih5e-6xtJ18NTBKWkcuKE0ESBn47JzX0n5BbVSvsmqncZOEZGFiNt6tA/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%282%29.jpeg",
  },
  {
    name: "Jhumar Modern Hanging Fixture",
    category: "LED Lights",
    price: "Call for Price",
    rating: 4.7,
    desc: "Stylish jhumar lighting option for contemporary interiors.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5CjCUnvxJwzfL2tenGZdDsNbdMxARqbGgTTOMtPFZY3cKunQguLQQKomG59V2C6pT0CPp_-Q3vIqzD_yh74F4eqcUZvX-eqzhSI_omVwinLtNSeJEJ9XIw9NZHi-uqkRcbRpd6FvsTyHoa6vZMiv0ETUBA97YEwbhyNV32fyLKzG8A8e5Uv_uvMrJAw/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%281%29.jpeg",
  },
  {
    name: "Jhumar Decorative Chandelier",
    category: "LED Lights",
    price: "Call for Price",
    rating: 4.8,
    desc: "Decorative chandelier-style jhumar for feature lighting.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgR4SQJKMUX7qnzgJOPh9piVvO0K2o24Kw-HiiRu8kvzIAC1E8a7COCeolx3bwhnhuXeeg75J4FiQI5_h0uOWC-HO3tonlwFot-vY_eu_NmI_vmtku_FZLfleM7TN9HzeSbEt75H7-IqNyauSQe00dHvc2vRIwUZWQ05zG-KtdyXXNZnbedPKb1HfJn4w/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM.jpeg",
  },
  {
    name: "Copper Wire 1.5mm",
    category: "Wires & Cables",
    price: "Rs. 1,800/coil",
    rating: 4.8,
    desc: "ISI-standard copper wiring for residential use",
  },
  {
    name: "Copper Wire 2.5mm",
    category: "Wires & Cables",
    price: "Rs. 2,400/coil",
    rating: 4.9,
    desc: "Heavy-duty copper wire for power circuits",
  },
  {
    name: "Modular Switch 6A",
    category: "Switches",
    price: "Rs. 180",
    rating: 4.7,
    desc: "Premium modular switch with indicator",
  },
  {
    name: "Modular Switch 16A",
    category: "Switches",
    price: "Rs. 250",
    rating: 4.6,
    desc: "High-load switch for AC and geyser circuits",
  },
  {
    name: "Universal Socket 6A",
    category: "Sockets",
    price: "Rs. 150",
    rating: 4.5,
    desc: "Multi-pin universal socket module",
  },
  {
    name: "5-Pin Socket 16A",
    category: "Sockets",
    price: "Rs. 220",
    rating: 4.7,
    desc: "Heavy-duty socket for high-power appliances",
  },
  {
    name: "LED Panel Light 18W",
    category: "LED Lights",
    price: "Rs. 850",
    rating: 4.8,
    desc: "Slim round panel light, cool daylight",
  },
  {
    name: "LED Bulb 12W",
    category: "LED Lights",
    price: "Rs. 250",
    rating: 4.6,
    desc: "Energy-efficient LED bulb, long life",
  },
  {
    name: "LED Strip Light 5m",
    category: "LED Lights",
    price: "Rs. 1,200",
    rating: 4.5,
    desc: "Flexible RGB strip with controller",
  },
  {
    name: 'Ceiling Fan 48"',
    category: "Fans",
    price: "Rs. 3,200",
    rating: 4.7,
    desc: "High-speed ceiling fan, energy efficient",
  },
  {
    name: 'Exhaust Fan 8"',
    category: "Fans",
    price: "Rs. 1,400",
    rating: 4.5,
    desc: "Kitchen/bathroom ventilation fan",
  },
  {
    name: "MCB 16A Single Pole",
    category: "MCBs",
    price: "Rs. 280",
    rating: 4.8,
    desc: "Miniature circuit breaker for home circuits",
  },
  {
    name: "MCB 32A Single Pole",
    category: "MCBs",
    price: "Rs. 320",
    rating: 4.9,
    desc: "High-capacity MCB for AC and heavy loads",
  },
  {
    name: "RCCB 40A Double Pole",
    category: "MCBs",
    price: "Rs. 1,800",
    rating: 4.8,
    desc: "Earth leakage protection for safety",
  },
  {
    name: "Distribution Board 8-Way",
    category: "Distribution Boards",
    price: "Rs. 1,850",
    rating: 4.7,
    desc: "Metal DB with DIN rail and cover",
  },
  {
    name: "Distribution Board 12-Way",
    category: "Distribution Boards",
    price: "Rs. 2,400",
    rating: 4.6,
    desc: "Modular DB for offices and commercial use",
  },
  {
    name: "CCTV Camera Dome 2MP",
    category: "CCTV",
    price: "Rs. 2,800",
    rating: 4.5,
    desc: "Indoor dome camera with night vision",
  },
  {
    name: "CCTV DVR 4-Channel",
    category: "CCTV",
    price: "Rs. 5,500",
    rating: 4.6,
    desc: "4-channel digital video recorder",
  },
  {
    name: "Wire Stripper",
    category: "Tools",
    price: "Rs. 450",
    rating: 4.7,
    desc: "Professional wire stripping tool",
  },
  {
    name: "Multimeter Digital",
    category: "Tools",
    price: "Rs. 1,200",
    rating: 4.8,
    desc: "Digital multimeter for voltage/current testing",
  },
  {
    name: "Safety Gloves",
    category: "Safety",
    price: "Rs. 350",
    rating: 4.5,
    desc: "Electrical insulation safety gloves",
  },
  {
    name: "Safety Goggles",
    category: "Safety",
    price: "Rs. 250",
    rating: 4.4,
    desc: "Impact-resistant safety eyewear",
  },
] as const;

export default function ShopPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = products.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  const selectedProduct = selectedIndex === null ? null : filtered[selectedIndex];

  const openViewer = (index: number) => setSelectedIndex(index);
  const closeViewer = () => setSelectedIndex(null);
  const showPrev = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current - 1 + filtered.length) % filtered.length,
    );
  };
  const showNext = () => {
    setSelectedIndex((current) => (current === null ? 0 : (current + 1) % filtered.length));
  };

  return (
    <main className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          badge="Product Catalog"
          title="Electrical Products"
          description="Browse our complete range of quality electrical products for homes, shops, and projects."
        />

        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:bg-secondary"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, index) => (
            <div
              key={p.name}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <button
                type="button"
                onClick={() => openViewer(index)}
                className="mb-4 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-secondary text-left"
                aria-label={`View ${p.name}`}
              >
                {"image" in p && p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={960}
                    height={1280}
                  />
                ) : (
                  <Zap className="h-8 w-8 text-primary/25" />
                )}
              </button>
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {p.category}
              </span>
              <h3 className="mt-1 font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
              <div className="mt-2 flex items-center gap-2">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                <span className="text-xs text-muted-foreground">{p.rating}</span>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                <span className="font-bold text-foreground">{p.price}</span>
                <button
                  type="button"
                  onClick={() => openViewer(index)}
                  className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No products found. Try a different search or category.
          </p>
        )}

        {selectedProduct && (
          <div className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/78 p-3 backdrop-blur-md sm:p-6">
            <div className="mx-auto flex min-h-full max-w-6xl items-center justify-center">
              <div className="relative my-auto grid w-full overflow-hidden rounded-[1.35rem] border border-white/15 bg-white shadow-[0_34px_90px_-34px_rgba(0,0,0,0.75)] sm:rounded-[1.75rem] lg:max-h-[calc(100vh-3rem)] lg:grid-cols-[1.08fr_0.92fr]">
                <button
                  type="button"
                  onClick={closeViewer}
                  className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-foreground shadow-lg transition-colors hover:bg-white"
                  aria-label="Close product viewer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative flex min-h-[260px] items-center justify-center bg-[linear-gradient(135deg,#f8fbff,#fff8ed)] p-4 sm:min-h-[430px] sm:p-6 lg:min-h-0">
                  {"image" in selectedProduct && selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-[62vh] w-full rounded-[1rem] object-contain shadow-[0_24px_70px_-44px_rgba(17,41,104,0.45)] sm:rounded-[1.25rem] lg:max-h-[calc(100vh-7rem)]"
                      width={1280}
                      height={1280}
                    />
                  ) : (
                    <div className="flex h-72 w-full items-center justify-center rounded-[1.25rem] bg-white">
                      <Zap className="h-16 w-16 text-primary/25" />
                    </div>
                  )}

                  {filtered.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPrev}
                        className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-foreground shadow-lg transition-transform hover:-translate-y-[52%] sm:left-5 sm:h-11 sm:w-11"
                        aria-label="Previous product"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-foreground shadow-lg transition-transform hover:-translate-y-[52%] sm:right-5 sm:h-11 sm:w-11"
                        aria-label="Next product"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="p-5 sm:p-8 lg:overflow-y-auto">
                  <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {selectedProduct.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground">
                    {selectedProduct.name}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {selectedProduct.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {selectedProduct.rating} customer rating
                    </span>
                  </div>

                  <div className="mt-7 rounded-[1.25rem] border border-border bg-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Price
                    </p>
                    <p className="mt-2 text-2xl font-bold text-foreground">{selectedProduct.price}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Final pricing can vary by brand, model, stock, quantity, and project
                      requirement. Call or WhatsApp for the latest availability.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href="tel:+9779843766006"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/9779843766006?text=${encodeURIComponent(`I want details for ${selectedProduct.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      More Products
                    </p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {filtered.slice(0, 10).map((item, index) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setSelectedIndex(index)}
                          className={`h-20 w-24 shrink-0 overflow-hidden rounded-xl border bg-surface transition-all ${
                            index === selectedIndex
                              ? "border-primary ring-2 ring-primary/20"
                              : "border-border hover:border-primary/40"
                          }`}
                          aria-label={`View ${item.name}`}
                        >
                          {"image" in item && item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              width={160}
                              height={120}
                            />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center">
                              <Zap className="h-5 w-5 text-primary/25" />
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
