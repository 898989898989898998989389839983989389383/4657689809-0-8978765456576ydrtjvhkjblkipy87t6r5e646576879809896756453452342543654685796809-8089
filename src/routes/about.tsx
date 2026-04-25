import Link from "@/components/AppLink";
import {
  Award,
  CheckCircle2,
  Clock3,
  Gem,
  Handshake,
  Heart,
  Lightbulb,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const aboutImage = "/hero-slide-first.png";

const values = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "We focus on trusted brands and dependable products people can buy with confidence.",
  },
  {
    icon: Handshake,
    title: "Honest Guidance",
    desc: "We help customers choose the right option for their needs instead of pushing the most expensive one.",
  },
  {
    icon: Lightbulb,
    title: "Practical Expertise",
    desc: "Our support is grounded in real installation, repair, and project experience.",
  },
  {
    icon: Heart,
    title: "Local Commitment",
    desc: "We care about long-term trust with homeowners, electricians, contractors, and nearby businesses.",
  },
] as const;

const highlights = [
  {
    icon: Store,
    title: "Showroom Guidance",
    desc: "Walk in, compare options clearly, and choose products with practical help from people who know the category.",
  },
  {
    icon: PackageCheck,
    title: "Genuine Product Supply",
    desc: "Trusted electrical brands for lighting, wiring, switchgear, CCTV, backup power, appliances, and accessories.",
  },
  {
    icon: Truck,
    title: "Wholesale Coordination",
    desc: "Repeat supply support for electricians, contractors, offices, institutions, and larger project requirements.",
  },
  {
    icon: Clock3,
    title: "Fast Local Follow-Up",
    desc: "Responsive communication for stock checks, urgent needs, delivery coordination, and service enquiries.",
  },
] as const;

const milestones = [
  { value: "10+", label: "Years of local service" },
  { value: "5000+", label: "Customer conversations and orders supported" },
  { value: "150+", label: "Electrical brands connected" },
  { value: "3", label: "Kathmandu Valley districts served" },
] as const;

const serviceFlow = [
  "Understand the product, quantity, budget, and timeline",
  "Suggest dependable options from suitable brands",
  "Coordinate stock, pricing, delivery, or service support",
] as const;

const reasons = [
  {
    icon: Users,
    title: "Built Around Relationships",
    desc: "Customers come back because they know they will get fair dealing, steady support, and responsive communication.",
  },
  {
    icon: Award,
    title: "Balanced For Retail And Projects",
    desc: "We support both walk-in buyers and larger supply requirements without losing attention to detail.",
  },
  {
    icon: Clock3,
    title: "Fast Local Coordination",
    desc: "When timing matters, nearby stock access and practical follow-up make a real difference.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f6f8fc_0%,#ffffff_24%,#f9fbff_58%,#fffaf2_100%)]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#102657_0%,#173d8d_52%,#f0b44f_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,223,152,0.2),transparent_26%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.13),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,13,34,0.82),rgba(5,13,34,0.42)_48%,rgba(5,13,34,0.22)),linear-gradient(180deg,rgba(5,13,34,0.14),rgba(5,13,34,0.5))]" />
        <img
          src={aboutImage}
          alt="Shuva Electric featured electrical products"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          width={1920}
          height={1080}
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-3xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                About Shuva Electric And Electronic
              </span>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Kathmandu's practical electrical partner for homes, shops, and projects
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
                Shuva Electric And Electronic brings together trusted brands, showroom guidance,
                wholesale supply, and service coordination so customers can buy with clarity and
                move their work forward without confusion.
              </p>

              <div className="mt-7 grid gap-3 text-sm text-white/82 sm:grid-cols-3">
                {["Retail", "Wholesale", "Service Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+9779843766006"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/24 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {milestones.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/16 bg-white/12 p-6 text-white shadow-[0_28px_60px_-36px_rgba(0,0,0,0.7)] backdrop-blur-md"
                >
                  <p className="text-3xl font-bold tracking-[-0.04em]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/74">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-8 pb-4 sm:-mt-10 lg:-mt-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-white/70 bg-white/92 p-8 shadow-[0_28px_80px_-42px_rgba(17,41,104,0.28)] backdrop-blur lg:p-10">
              <SectionHeading
                badge="Our Story"
                title="Built on clear advice and repeat trust"
                description="A local business shaped by everyday customer needs, project deadlines, and honest product guidance."
                center={false}
              />

              <div className="space-y-4 text-sm leading-7 text-foreground/80 sm:text-base">
                <p>
                  Shuva Electric And Electronic started with a simple goal: make dependable
                  electrical products easier to choose, easier to source, and easier to trust.
                </p>
                <p>
                  Over time, our showroom in Old Baneshwor became a support point for homeowners,
                  electricians, contractors, colleges, offices, and commercial spaces that need
                  both products and practical direction.
                </p>
                <p>
                  Today, we support retail purchases, wholesale supply, and service coordination
                  across Kathmandu Valley while keeping the same core approach: clear communication,
                  fair pricing, and recommendations that fit the real job.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-[linear-gradient(135deg,rgba(18,40,92,0.04),rgba(255,203,108,0.18))] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Gem className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">What makes the difference</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      We combine showroom guidance, product sourcing, and practical field
                      understanding so customers can choose faster and with more confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_28px_80px_-44px_rgba(17,41,104,0.28)]">
              <div className="relative min-h-[320px] sm:min-h-[380px]">
                <img
                  src={aboutImage}
                  alt="Shuva Electric product display"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={900}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,45,0.06),rgba(10,20,45,0.5))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="rounded-2xl border border-white/15 bg-white/12 p-5 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
                      Showroom + Support
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-tight">
                      A place where product advice feels practical, not overwhelming
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/82">
                      Customers visit us to compare options clearly, understand what fits the job,
                      and get recommendations that match real budgets and timelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            badge="What We Support"
            title="Everything starts with the right fit"
            description="We help customers match the product to the purpose, whether it is a quick replacement or a full project order."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/75 bg-white/90 p-6 shadow-[0_22px_60px_-36px_rgba(17,41,104,0.24)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(17,41,104,0.3)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(32,71,168,0.12),rgba(255,198,92,0.22))]">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-flex rounded-full border border-primary/12 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary shadow-[0_10px_24px_-18px_rgba(23,54,135,0.6)] backdrop-blur">
                How We Help
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
                Simple process, better decisions
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-[1.05rem]">
                Electrical buying can get confusing quickly. We keep the conversation grounded in
                what you need, what will work, and what can be supplied reliably.
              </p>
            </div>

            <div className="grid gap-4">
              {serviceFlow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-[0_18px_50px_-36px_rgba(17,41,104,0.24)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-sm font-medium leading-6 text-foreground/84 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What shapes the way we work"
            description="The standards we try to bring into every recommendation, order, and follow-up."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-[0_22px_60px_-38px_rgba(17,41,104,0.22)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(17,41,104,0.3)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_80px_-44px_rgba(17,41,104,0.28)]">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative overflow-hidden bg-gradient-gold p-8 text-gold-foreground lg:p-10">
                <img
                  src={aboutImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-16 mix-blend-multiply"
                  loading="lazy"
                  width={900}
                  height={700}
                  aria-hidden="true"
                />
                <div className="relative">
                <span className="inline-flex rounded-full border border-gold-foreground/15 bg-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
                  Why Choose Us
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  Local support that feels steady, clear, and useful
                </h2>
                <p className="mt-4 text-sm leading-7 text-gold-foreground/82 sm:text-base">
                  We aim to be the kind of electrical partner people can return to with confidence,
                  whether the need is simple, urgent, or part of a larger project.
                </p>

                <div className="mt-8 rounded-2xl border border-gold-foreground/15 bg-white/18 p-5">
                  <div className="flex items-start gap-3 text-sm leading-7 text-gold-foreground/88">
                    <MapPin className="mt-1 h-4 w-4 shrink-0" />
                    <p>
                      Visit us in Old Baneshwor for quick comparisons, practical guidance, and
                      support for both daily purchases and project requirements.
                    </p>
                  </div>
                </div>
                </div>
              </div>

              <div className="grid gap-5 p-8 lg:p-10">
                {reasons.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white px-8 py-10 shadow-[0_26px_70px_-42px_rgba(17,41,104,0.26)] lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-10">
            <img
              src={aboutImage}
              alt=""
              className="absolute inset-y-0 right-0 hidden h-full w-2/5 object-cover opacity-10 lg:block"
              loading="lazy"
              width={780}
              height={420}
              aria-hidden="true"
            />
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                <MapPin className="h-3.5 w-3.5" />
                Visit Or Contact Us
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Want to know more about our products or support?
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Visit us at Old Baneshwor, call for quick guidance, or send us your enquiry for
                retail, wholesale, or service support.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
              </Link>
              <a
                href="tel:+9779843766006"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
