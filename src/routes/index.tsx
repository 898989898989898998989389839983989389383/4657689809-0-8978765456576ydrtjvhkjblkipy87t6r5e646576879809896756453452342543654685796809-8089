import Link from "@/components/AppLink";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-showroom.jpg";
import SectionHeading from "@/components/SectionHeading";

const heroSlides = [
  {
    image: "/hero-slide-first.png",
    alt: "Shuva Electric featured products",
    position: "center center",
  },
  {
    image:
      "https://scontent.fktm2-2.fna.fbcdn.net/v/t39.30808-6/660463382_122152692500659399_697478393851457709_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BopKY99A478Q7kNvwEhyNw4&_nc_oc=Adomi1J9zLjjWVefTMWpguzMJdCyv3aQ3Vm6yEI7IvYOx5JArYlxS494I1X7R9RkuTI&_nc_zt=23&_nc_ht=scontent.fktm2-2.fna&_nc_gid=lawGlXwKuCQ6l2qa51DqPA&oh=00_Af3mei0kPZkuqwfKZp7N8MJ0rbwuM-8cLtrL6x-xvh9unw&oe=69F1F8A9",
    alt: "Shuva Electric second featured slider image",
    position: "center center",
  },
  {
    image: heroImg,
    alt: "Shuva Electric showroom electrical products",
    position: "center 35%",
  },
  {
    image: "https://www.rathielectricals.com/upload/content/banner/bannerimage-2023-04-05-10-21-47-CA7.jpg",
    alt: "Rathi Electricals banner",
    position: "center center",
  },
  {
    image: heroImg,
    alt: "Shuva Electric showroom interior view",
    position: "center 60%",
  },
] as const;

const trustPoints = [
  { icon: ShieldCheck, title: "Genuine Products", desc: "Authorized brands with dependable warranty support" },
  { icon: Headphones, title: "Quick Support", desc: "Responsive guidance for retail and project orders" },
  { icon: Truck, title: "Local Delivery", desc: "Fast dispatch across Kathmandu Valley" },
] as const;

const services = [
  { icon: Zap, title: "House Wiring", desc: "Complete residential electrical wiring solutions" },
  { icon: Wrench, title: "Maintenance & Repair", desc: "Troubleshooting, repair, and urgent service support" },
  { icon: Building2, title: "Commercial Setup", desc: "Electrical solutions for offices, shops, and institutions" },
  { icon: ShieldCheck, title: "Safety Inspection", desc: "Protection checks and practical electrical audits" },
  { icon: ShieldCheck, title: "CCTV Wiring & Installation", desc: "Neat camera wiring and dependable installation for homes and businesses" },
  { icon: Zap, title: "Inverter Battery Installation", desc: "Safe inverter and battery setup for backup power at home or work" },
] as const;

const clients = [
  {
    title: "Kings College",
    desc: "Electrical product supply and project support for a leading education campus.",
    image: "https://kingscollege.edu.np/_next/image?url=%2Flogo%2Fkings.png&w=640&q=75",
  },
  {
    title: "NPL",
    desc: "Reliable materials and timely support for professional electrical requirements.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Nepal_Premier_League_official_logo.png",
  },
  {
    title: "Sunway College",
    desc: "Trusted product sourcing and service coordination for institutional needs.",
    image: "https://api.myunicampus.com/6da490c2-415b-4732-9b44-b41fc1a2565b_1744952092980.png",
  },
  {
    title: "Global College",
    desc: "Dependable electrical product support and coordination for campus requirements.",
    image: "https://gci.edu.np/logo.png",
  },
] as const;

const brands = [
  {
    name: "Brilliant Electricals",
    image: "https://brilliantelectricals.com/wp-content/themes/brilliant/bri_imag/img/logo/Logo.svg",
  },
  {
    name: "Smarten",
    image: "https://www.smartenpowersystems.com/wp-content/uploads/2021/12/smarten-logo.svg",
  },
  {
    name: "Janaki Cable",
    image: "https://janakicable.com/images/Best-Wire-Cable-Manufacturing-Comapny-Janaki-Cable-Industries.png",
  },
  {
    name: "Rathi",
    image: "https://www.rathielectricals.com/frontend/img/logo.svg",
  },
  {
    name: "Halonix",
    image: "https://www.halonix.co.in/wp-content/uploads/2025/05/Logo.png",
  },
  {
    name: "Havells",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Havells_Logo.svg",
  },
  {
    name: "Schneider Electric",
    image: "https://57y3mmz33i6t4xza2r4r387.blob.core.windows.net/hybris/master/images/atc/450Wx450H/Schneider_electric.jpg",
  },
  {
    name: "Legrand",
    image: "https://www.inde.campusfrance.org/sites/pays/files/inde/Legrand-logo.jpg",
  },
  {
    name: "Philips",
    image: "https://medakmedical.com/uploads/CAT/Philips_logo.jpg",
  },
  { name: "Crompton", image: "https://www.crompton.co.in/cdn/shop/files/crompton-greaves-logo.webp" },
  {
    name: "Bajaj",
    image:
      "https://www.bajajelectricals.com/cdn/shop/files/simply-otp-login-banner.png?v=1722601845&width=220",
  },
  {
    name: "Vishal Electro",
    image:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/336789813_746938100170609_7165289522975711672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGNugYlbnQGbiVjeMjzpfx7F22-MYrSNwgXbb4xitI3CE8OaAh8tG2QgmgSK6_S9MHztRid_WqWgpBlu9Dv42_0&_nc_ohc=ZYfzETWionUQ7kNvwGBZ-_f&_nc_oc=AdrQdipPFUvcAOZ__0cEnC97IubbHlpVHoWbAn1T9pyYOuOVaVAbs0J5LPGqqFQ4KYs&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=835hW7t6_5vJ-qvBph8RlQ&_nc_ss=7a3a8&oh=00_Af2_IjYs_qNhjSf00ED7ri-efCJtMyfj45w2Ql7lYntlFw&oe=69E64BDC",
  },
] as const;

const serviceHighlights = [
  "On-site guidance",
  "Certified materials",
  "Fast response",
  "Neat finishing",
] as const;

const featuredProducts = [
  {
    name: "Jhumar Crystal Hanging Light",
    category: "Decorative Lighting",
    desc: "Premium chandelier styling for living rooms, halls, hotels, and feature spaces.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2gl-Uve5EMHjcTuF_2ws2hhz8QWEOtNIagg59jbl8i8stwLY_OStbXHigXM3a9TIueP_P4WU69zVy4NQh4Y-fybJtI7tbMjnB-8SegFLb1VMxu-b3qNYldYc8uzyKkrkc8ht8Dt5A1hiXqjn7U9DE-3fFmCCX7RVuumDDZryKyQtkrKi2JfdbLai3Kw/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%284%29.jpeg",
  },
  {
    name: "Designer Pendant Light",
    category: "LED Lights",
    desc: "Clean, modern pendant lighting for homes, showrooms, and commercial interiors.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgU5ZA2MOE3eMDi6q-WC7RPyjeGWfZqUzSFKyp-7UnUfw40x4VgNOTTnYZtT8y5MWQ4XOzoFWLgQHq7pfLrMK-LjpcvKoigEbcaGlMxnytBKUY8_l6J62l7gDe3uo7Zh_eHcXAfAVBPdXg3gY4nDAZZW5AW5IkCvMK59PsGklDGIO4g6KP9CKHbhuvoNQ/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%283%29.jpeg",
  },
  {
    name: "Luxury Ceiling Jhumar",
    category: "Decorative Lighting",
    desc: "A bright centerpiece with decorative crystal detailing and a polished finish.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXO40d0lXxlKijWfY1qDdxfQmockdJQHwR_y73TUqdPADUpJ32z8QoQPcFZ4YlTHYms4DTeG_QZQrXQ8Ucd893HdGxy-DCPxI7GrZqfbZ3e1GOYfyhoNPeCzPl8tds9Wq67Oih5e-6xtJ18NTBKWkcuKE0ESBn47JzX0n5BbVSvsmqncZOEZGFiNt6tA/s1280/WhatsApp%20Image%202026-04-16%20at%2010.56.03%20AM%20%282%29.jpeg",
  },
] as const;

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,211,105,0.18),transparent_20%),linear-gradient(180deg,#fffaf3_0%,#f8fbff_22%,#ffffff_48%,#f9fbff_70%,#fff8ef_100%)]">
      <section className="pattern-skip relative overflow-hidden bg-black">
        <div className="relative h-[48vh] min-h-[320px] sm:h-[58vh] lg:h-[78vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              src={heroSlides[activeSlide].image}
              alt={heroSlides[activeSlide].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: heroSlides[activeSlide].position }}
              width={1920}
              height={1080}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,42,0.08),rgba(6,16,42,0.46))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,211,105,0.24),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(74,118,255,0.22),transparent_30%)]" />

          <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-6 lg:px-8 lg:pb-8">
            <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
              <div className="hidden max-w-xl rounded-[1.75rem] border border-white/16 bg-white/10 px-6 py-5 text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Shuva Electric And Electronic
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight">
                  Premium electrical supply, support, and project coordination in Kathmandu.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_10px_24px_-14px_rgba(0,0,0,0.9)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/18"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_10px_24px_-14px_rgba(0,0,0,0.9)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/18"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="ml-2 flex items-center gap-2">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.alt}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-10 bg-gold shadow-[0_0_18px_rgba(255,210,105,0.85)]" : "w-2.5 bg-white/45"}`}
                    />
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>

      <section className="relative z-10 -mt-6 pb-2 sm:-mt-8 lg:-mt-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3 lg:px-8">
          {trustPoints.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/70 bg-white/82 p-5 shadow-[0_24px_60px_-34px_rgba(17,41,104,0.32)] backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/14 to-gold/18">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-18 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(57,93,204,0.08),transparent_58%)]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading badge="Services" title="Professional Electrical Services" description="From house wiring to institutional and commercial setups, we support installation, maintenance, and practical site needs." />
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="service-illustration overflow-hidden rounded-[2.2rem] border border-orange-200/60 bg-[linear-gradient(160deg,rgba(255,250,240,0.98),rgba(255,238,213,0.92)_46%,rgba(255,255,255,0.95)_100%)] shadow-[0_28px_70px_-36px_rgba(232,110,24,0.45)]">
              <div className="flex h-full min-h-[360px] flex-col justify-between p-6 sm:min-h-[440px] lg:p-8">
                <div className="flex flex-wrap gap-2">
                  {serviceHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-orange-200/70 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <img
                  src="https://png.pngtree.com/png-vector/20250103/ourmid/pngtree-a-cute-electrician-boy-clipart-illustration-with-transparent-background-png-image_15026633.png"
                  alt="Electrician illustration"
                  className="mx-auto h-full max-h-[380px] w-auto object-contain drop-shadow-[0_30px_36px_rgba(234,88,12,0.2)]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group rounded-[1.8rem] border border-white/75 bg-white/90 p-6 text-center shadow-[0_22px_60px_-36px_rgba(17,41,104,0.28)] backdrop-blur transition-all hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-34px_rgba(17,41,104,0.38)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(32,71,168,0.12),rgba(255,198,92,0.22))] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.desc}</p>
              </div>
            ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(32,71,168,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-18 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_center,rgba(255,211,105,0.16),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              badge="Featured Products"
              title="Popular Electrical Products"
              description="Explore selected lighting and electrical products available for retail, wholesale, and project supply."
              center={false}
            />
            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(32,71,168,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Eye className="h-4 w-4" />
              View More
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[1.75rem] border border-white/75 bg-white/92 shadow-[0_24px_70px_-38px_rgba(17,41,104,0.34)] backdrop-blur transition-all hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-40px_rgba(17,41,104,0.42)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={960}
                    height={720}
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-1.5 text-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.desc}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-foreground">Call for Price</span>
                    <Link
                      to="/shop"
                      className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-18 lg:py-24">
        <div className="absolute inset-x-0 top-6 -z-10 h-48 bg-[radial-gradient(circle_at_center,rgba(75,118,255,0.08),transparent_58%)]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="animate-fade-up">
            <SectionHeading badge="OUR CLIENTS" title="Trusted By Our Clients" description="We support colleges, organizations, and local businesses with dependable electrical products and practical coordination." />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <div key={client.title} className="client-card animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: `${index * 110}ms` }}>
                <div className="mb-4 overflow-hidden rounded-2xl border border-border/70 bg-[linear-gradient(135deg,rgba(32,71,168,0.05),rgba(244,181,68,0.12))] p-2">
                  <img
                    src={client.image}
                    alt={`${client.title} logo`}
                    className="h-24 w-full rounded-[1rem] object-contain bg-white"
                    loading="lazy"
                    width={320}
                    height={180}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{client.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{client.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(32,71,168,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/15 bg-gradient-hero px-8 py-10 shadow-[0_34px_80px_-40px_rgba(19,38,94,0.72)] lg:px-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <span className="mb-3 inline-flex rounded-full border border-white/10 bg-primary-foreground/14 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Wholesale</span>
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Bulk Orders And Project Supply With Faster Coordination</h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/82">Competitive pricing, repeat-order support, and practical delivery coordination for contractors, builders, institutions, and resellers.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/wholesale" className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[0_18px_40px_-18px_rgba(255,211,105,0.7)] transition-transform hover:-translate-y-0.5">Request Wholesale Quote</Link>
                <Link to="/wholesale" className="inline-flex items-center rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-[0_18px_40px_-20px_rgba(255,255,255,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/92">View More</Link>
                <a href="tel:+9779843766006" className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/8 px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" />
                  Call For Pricing
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-primary-foreground/12 bg-primary-foreground/10 p-6 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-primary-foreground/10 p-5"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Supply</p><p className="mt-2 text-2xl font-bold text-primary-foreground">Retail + Bulk</p></div>
                <div className="rounded-2xl border border-white/8 bg-primary-foreground/10 p-5"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Coverage</p><p className="mt-2 text-2xl font-bold text-primary-foreground">Kathmandu Valley</p></div>
                <div className="rounded-2xl border border-white/8 bg-primary-foreground/10 p-5"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Support</p><p className="mt-2 text-2xl font-bold text-primary-foreground">Fast Response</p></div>
                <div className="rounded-2xl border border-white/8 bg-primary-foreground/10 p-5"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Focus</p><p className="mt-2 text-2xl font-bold text-primary-foreground">Project Ready</p></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/75 bg-white/92 shadow-[0_30px_80px_-42px_rgba(17,41,104,0.34)] backdrop-blur lg:grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 lg:p-12">
              <span className="mb-3 inline-flex rounded-full border border-gold/24 bg-gold/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Visit Us</span>
              <h2 className="text-3xl font-bold text-foreground">Our Showroom In Kathmandu</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">Visit our location at Old Baneshwor to explore products, compare options, and get expert guidance for your next residential or commercial requirement.</p>
              <ul className="mt-7 space-y-4 text-sm">
                <li className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-foreground"><MapPin className="h-4 w-4 text-primary" />Old Baneshwor, Kathmandu</li>
                <li className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-foreground"><Clock className="h-4 w-4 text-primary" />Sun - Fri: 9 AM - 7 PM</li>
                <li className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-foreground"><Phone className="h-4 w-4 text-primary" />9843766006, 9806814962</li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(32,71,168,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  View More
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px]">
              <img src={heroImg} alt="Shuva Electric showroom" className="h-full w-full object-cover" loading="lazy" width={960} height={540} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,20,45,0.38))]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-18 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-44 bg-[radial-gradient(circle_at_center,rgba(255,211,105,0.18),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading badge="Brands" title="Trusted Brands We Carry" description="Connected with more than 150 brands for daily retail, wholesale, and project electrical needs." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {brands.map((brand, index) => (
              <div key={brand.name} className="rounded-[1.65rem] border border-white/70 bg-white/90 px-5 py-5 text-center shadow-[0_20px_50px_-34px_rgba(17,41,104,0.28)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(17,41,104,0.34)]" style={{ animationDelay: `${index * 70}ms` }}>
                {brand.image ? (
                  <div className="mb-3 flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <img
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      width={240}
                      height={96}
                    />
                  </div>
                ) : (
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(32,71,168,0.12),rgba(255,198,92,0.22))] text-sm font-bold text-primary">
                    {brand.name.slice(0, 1)}
                  </span>
                )}
                <p className="text-sm font-semibold text-foreground/85">{brand.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/brands"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_rgba(32,71,168,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-18 pt-8 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <div className="overflow-hidden rounded-[2.3rem] border border-white/75 bg-white/90 px-6 py-10 shadow-[0_28px_80px_-40px_rgba(17,41,104,0.3)] backdrop-blur sm:px-8 lg:px-10">
          <SectionHeading badge="Get In Touch" title="Need Electrical Products Or Service Support?" description="Contact us for quick product enquiry, showroom guidance, wholesale supply, or electrical service booking." />
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+9779843766006" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_rgba(32,71,168,0.55)] transition-transform hover:-translate-y-0.5"><Phone className="h-4 w-4" />Call Now</a>
            <a href="https://wa.me/9779843766006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[0_18px_40px_-18px_rgba(255,204,94,0.66)] transition-transform hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5">Contact Form</Link>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
