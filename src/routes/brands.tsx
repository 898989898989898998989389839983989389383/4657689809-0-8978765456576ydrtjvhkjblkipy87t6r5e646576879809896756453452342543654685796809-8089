import { createFileRoute } from "@tanstack/react-router";
import SectionHeading from "@/components/SectionHeading";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/brands")({
  head: () =>
    buildSeoMeta({
      title: "Electrical Brands We Carry | Havells, Schneider, Legrand, Philips",
      description:
        "Explore the trusted electrical brands available at Shuva Electric And Electronic including Havells, Schneider Electric, Legrand, Philips, Anchor, Polycab, and more.",
      path: "/brands",
      keywords: ["electrical brands Kathmandu", "Havells dealer Kathmandu", "Schneider Electric supplier Nepal"],
    }),
  component: BrandsPage,
});

const brandsList = [
  {
    name: "Brilliant Electricals",
    desc: "Lighting, wiring accessories, and dependable electrical solutions for homes and businesses",
    image: "https://brilliantelectricals.com/wp-content/themes/brilliant/bri_imag/img/logo/Logo.svg",
  },
  {
    name: "Smarten",
    desc: "Power backup systems, inverters, batteries, and energy solutions",
    image: "https://www.smartenpowersystems.com/wp-content/uploads/2021/12/smarten-logo.svg",
  },
  {
    name: "Janaki Cable",
    desc: "Wires and cables for residential, commercial, and industrial electrical projects",
    image: "https://janakicable.com/images/Best-Wire-Cable-Manufacturing-Comapny-Janaki-Cable-Industries.png",
  },
  {
    name: "Rathi",
    desc: "Cables, wires, switches, and electrical products for residential and commercial use",
    image: "https://www.rathielectricals.com/frontend/img/logo.svg",
  },
  {
    name: "Halonix",
    desc: "Lighting, lamps, LED products, and energy-efficient electrical solutions",
    image: "https://www.halonix.co.in/wp-content/uploads/2025/05/Logo.png",
  },
  {
    name: "Havells",
    desc: "Switches, wires, fans, lights, MCBs, and distribution boards",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Havells_Logo.svg",
  },
  {
    name: "Schneider Electric",
    desc: "MCBs, RCCBs, contactors, and automation products",
    image: "https://57y3mmz33i6t4xza2r4r387.blob.core.windows.net/hybris/master/images/atc/450Wx450H/Schneider_electric.jpg",
  },
  {
    name: "Legrand",
    desc: "Premium modular switches, sockets, and accessories",
    image: "https://www.inde.campusfrance.org/sites/pays/files/inde/Legrand-logo.jpg",
  },
  {
    name: "Philips",
    desc: "LED bulbs, panels, tubes, and outdoor lighting",
    image: "https://medakmedical.com/uploads/CAT/Philips_logo.jpg",
  },
  {
    name: "Anchor by Panasonic",
    desc: "Switches, sockets, fans, and wiring accessories",
    image: "/brands/anchor.svg",
  },
  { name: "Finolex", desc: "Wires, cables, and electrical conduits", image: "/brands/finolex.svg" },
  { name: "Polycab", desc: "Wires, cables, fans, and switches", image: "/brands/polycab.svg" },
  {
    name: "Syska",
    desc: "LED lights, smart lighting, and personal care electronics",
    image: "/brands/syska.svg",
  },
  {
    name: "Crompton",
    desc: "Fans, pumps, and lighting products",
    image: "https://www.crompton.co.in/cdn/shop/files/crompton-greaves-logo.webp",
  },
  {
    name: "Bajaj",
    desc: "Fans, LEDs, and small appliances",
    image:
      "https://www.bajajelectricals.com/cdn/shop/files/simply-otp-login-banner.png?v=1722601845&width=220",
  },
  {
    name: "Orient Electric",
    desc: "Fans, lighting, and home appliances",
    image: "/brands/orient.svg",
  },
  {
    name: "KEI Industries",
    desc: "Cables and wires for residential and industrial use",
    image: "/brands/kei.svg",
  },
  {
    name: "Vishal Electro",
    desc: "Electrical supply partner with practical retail and project support.",
    image:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/336789813_746938100170609_7165289522975711672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGNugYlbnQGbiVjeMjzpfx7F22-MYrSNwgXbb4xitI3CE8OaAh8tG2QgmgSK6_S9MHztRid_WqWgpBlu9Dv42_0&_nc_ohc=ZYfzETWionUQ7kNvwGBZ-_f&_nc_oc=AdrQdipPFUvcAOZ__0cEnC97IubbHlpVHoWbAn1T9pyYOuOVaVAbs0J5LPGqqFQ4KYs&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=835hW7t6_5vJ-qvBph8RlQ&_nc_ss=7a3a8&oh=00_Af2_IjYs_qNhjSf00ED7ri-efCJtMyfj45w2Ql7lYntlFw&oe=69E64BDC",
  },
];

function BrandsPage() {
  return (
    <main className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            badge="Our Brands"
            title="Authorized Brands We Carry"
            description="We are connected with more than 150 trusted electrical brands. Every product is 100% genuine with full warranty."
          />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brandsList.map((b, index) => (
            <div
              key={b.name}
              className="brand-card animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-card"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="brand-logo-shell mb-4 flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <img
                  src={b.image}
                  alt={`${b.name} logo`}
                  className="brand-logo h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `<div class="flex h-full w-full items-center justify-center text-xl font-bold text-primary">${b.name[0]}</div>`;
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{b.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
