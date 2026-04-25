import SectionHeading from "@/components/SectionHeading";

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
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ7zWA-qCD1An6IAcnVT22NDjkhg-6sPKnUGdyDWUs3Vd0Y7pXPGvaNb0MafWz9D-tv9a6uST_NRIJiIcq0gXqk1QnCgdg0BNllD4nm321lVd5hm1XyCk4lktbzfZzVm8bPdzB7HMfexTsJGJzzbdiJ0sy8J9J5BNlUsgaUo4M1zptgvvar-a4JzALZw/s1600/Orient_Logo_2x_906fb550-c200-42e5-b9e7-f6375c0bcdab.png",
  },
  {
    name: "KEI Industries",
    desc: "Cables and wires for residential and industrial use",
    image: "/brands/kei.svg",
  },
  {
    name: "C&S Electric",
    desc: "Switchgear, protection devices, and electrical control solutions",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggpde7znsHdXlQZCXWp0l8s8x4lAc-3ZSqckpJBM45pg-6W_YXuDvrv78AqiMBygM4_NwR6zNRzaW93mQxEXnmM17YWJIw7-hIBoLwp6ixz1fJURp-j1ZmKZjFbDo_WkZI7gvretFEhwrnClV4BhO_tSU_KbjgvSYXpHT7dh-5ZvJi-nSXgVq4AL3noQ/s1600/C&S%20Electric.png",
  },
  {
    name: "Kangaro",
    desc: "Office, stationery, stapling, and utility products",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiADeuIgf-0aaOIVxD_TmMLlW75pOJYDqid7X7_NI_NGNfgk3dIVWp9R6dGLgJMFX6XaEbzVuQNFohGhK8_M5n6ELjXmL-DhqaoRtpoZbQbK97HgufbbaSEbtPidExsi_nY3SUwsql9k5RNxGoOxm8rm6-SwYOJ2RE-zLEfq9avz3XgKJ6vm5ISPv33SQ/s1600/Kangaro.png",
  },
  {
    name: "Hikvision",
    desc: "CCTV cameras, surveillance systems, and security solutions",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihFXZ1YMDIWsoNV23js7H8w4DfjQivAYE7m9O1V1fLctzpGo_tU2VaMs3egkZp6uaN38_wSNFA5iludiFtZJ3ZbFb8F__uW7FvYJ9fagrj345Bhx1VJe327ydNDFty3EDUFqcrqCEDoDcbWHC8MY7nU-NlRcodrBpkEQtrR9fWOyV1X00SMNdS3pg3lg/s1600/LOGO-Hikvision.png",
  },
  {
    name: "Microtek",
    desc: "Inverters, UPS systems, stabilizers, and power backup products",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigjXQmIF2PKmpRBWHQFVYjSrXOOuqfPK6zEf0OCM89fM1G-KEL2EBGW28m72CEfuPDTtOlOXhlIrBkYbkAkfJ8OPBTf49rLJx71UO3aa4JvEWkxSQ61SsveXmz4iTFmQpBv2nd8wQomPdw5AWwM4v5_EEneSGv1ijSP5Ox8Mi0e82gOW9PNMnEfAyK-A/s1600/microtek.jpg",
  },
  {
    name: "Skyworth",
    desc: "Televisions, smart displays, and home entertainment electronics",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz8PDPH42xoT5BHhv_Hb48Ut6j6P0MhkCKuBMYpGk4tybKQFvcnstLU7l9eH1Bo6Tx9d4JFxJxXn4uEoZ7sihGSG6-Kti8YHUXPabuLPNtDe7WyZL-Q_2M7XYG2KBC8r0MAfoEvG3gtN7W-iu3VV_TlSxtJx9cR4m7yXzYxchvzLhGtgOFA1Xt2YEBIg/s1600/skyworth.jpeg",
  },
  {
    name: "Litmus",
    desc: "Wires, cables, and electrical products for dependable installations",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8t4MJl3gx0owk1fxsFBmkTt8bwX9BFFfffF7pK6qmjoUxKFMBDMG0_Chtilk238wxU8DljrHBt9WwKgSq5ZKlK28hPo6N8gVVnMobFzvzIzgukzKvV8V5Vdixgx6J4ADdMRM0iNv5sW-uDpuTmfx6QSRZPkbPOdY39MjxPfJNqOaZTChsH6Um6_xXEg/s1600/7a832-untitled-1.jpg",
  },
  {
    name: "CG",
    desc: "Appliances, lighting, and electrical products for homes and businesses",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiioEz5dr2SRYDIRiVj2WQusqjlQ5S-8pfWTQEGvClYRxMEJ7Ous_18sNfuwuHGXMIzEwGWcGr-Nee1FAoQr3w9VehgX39d3b_i5kkUIN2gZVtYJ91ILZyP-6vLHObmz1br6su-GSpo0ZXUcJUWjOmZS_nYXHhPu8KIzAjkRpdRzkAhC4VGe_9qvYoU6w/s1600/CG%20LOGO.png",
  },
  {
    name: "Divya",
    desc: "Electrical products and accessories for daily retail needs",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIk2mU8s5P7aD33q2voO03H48x3M9nzVHH9M9CUgPqbH_lxJ0ZYw6pmMBWOwjU8KmjE9PJYayiErQpAjjXqP3RmxWFg0S2Z-qGKMjpvPf846tG0DGUY0MJxkvCDYUBSvphoBHOI6SHM9Ew3wkQUKwqO5Amw0hfQcLLYGMGGpv4dMnifXgn1Tc14WljgQ/s1600/DIVYA.jpeg",
  },
  {
    name: "Exide",
    desc: "Batteries, inverter batteries, and stored energy products",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwSRJXmzfjijv4HOUmha2zgXr2snRpUL8ntxRiWGQ2iew2yHW_gyEFUdZYLIhmrostJUjRLXAo-gnAbpTYoUKDUUVD3BkwIEQeGDLvwbcViWREf2vtFQrsR1uaqKW0dQproLq4CCiftLD8aGTtXQzHY-qW-65WH9F3REebKzl3T7KsMChvW3VutrdMOA/s1600/exide-industries-limited-logo-vector.png",
  },
  {
    name: "EZVIZ",
    desc: "Smart security cameras, video doorbells, and surveillance devices",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHNfzPPIwRkpQZBSqI4rqnt64BYd5zPs7xKNjrbWWAICUlkCbegqXXV21e8YJ5XFihf5oVSNEQTTNToUtSTKGOAtA1pzKZ37RoENnW-f7EFuFNnLzOsvSHGJEEsJ8rZZb3a-TbgnCTxGbJGZG0zCb8I9rqtQbvK1A6SfFCGFvLazJ1FFyoo3RzI2R0XQ/s1600/Ezviz_Logo.png",
  },
  {
    name: "Geo",
    desc: "Electrical products and accessories for residential and commercial use",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4rZ-MhHEi2UrLe6HAC2ugp5XEuhPdAtON9zI2D5Lo7i5fRi8KFXLBFxr-K1LvBPuRyFxKaGXpuyEFp-6BXnyy2CPJUTQBLwXvXgUaetj0xPJ-8N3qObruspkajFBVh3KMUKvCcH1L4Q75kjT41RAPwHWx-Da6JhzW7n2D_6UYk4SRI1QOZIO1CIAJvA/s1600/Geo.png",
  },
  {
    name: "Omax",
    desc: "Electrical products and accessories for home and project needs",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJf2EYApREstg_OwyKIsr3AdFMbkFEE4jzu-xzl5KfyWmt-8g846VEoX5WqJ7EYUBQzrXTrbsP3vJ00YuIsSOQACaNpu76Y1VwAZJXYufh51NpXr-AFY2srbssJyKxxJJPYhEgw6SIdfkURvf-ny8DxFkYOarcYdVRSUZ3-pYu9WkzerkqoqZhw4Kd6g/s1600/omax-1-logo-png-transparent.png",
  },
  {
    name: "Sintech",
    desc: "Pumps, motors, and electrical utility products",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuNxRbX3dq0y_igiVRrlqXIc_w6zaFeP4O2nDlz5Tgv40oyeg0CyJ6DPNb5CGO2R3zHuHs4qTYCJGJL6iNmGNM5gdscrGJ-OBCe1BhawsIg-nkkqB0QZawF54y4PF63qxvvvL1zV2UrB_RzgSRvh5LOe9_y4ztVbsnG86VWQh05xwWGwh-FtlBmCW8GQ/s1600/SINTECH.png",
  },
  {
    name: "Vishal Electro",
    desc: "Electrical supply partner with practical retail and project support.",
    image:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/336789813_746938100170609_7165289522975711672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGNugYlbnQGbiVjeMjzpfx7F22-MYrSNwgXbb4xitI3CE8OaAh8tG2QgmgSK6_S9MHztRid_WqWgpBlu9Dv42_0&_nc_ohc=ZYfzETWionUQ7kNvwGBZ-_f&_nc_oc=AdrQdipPFUvcAOZ__0cEnC97IubbHlpVHoWbAn1T9pyYOuOVaVAbs0J5LPGqqFQ4KYs&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=835hW7t6_5vJ-qvBph8RlQ&_nc_ss=7a3a8&oh=00_Af2_IjYs_qNhjSf00ED7ri-efCJtMyfj45w2Ql7lYntlFw&oe=69E64BDC",
  },
];

export default function BrandsPage() {
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
