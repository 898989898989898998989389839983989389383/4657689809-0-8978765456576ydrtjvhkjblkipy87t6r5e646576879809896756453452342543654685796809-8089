import Link from "./AppLink";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-orange-300/60 bg-orange-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo
              className="mb-4"
              textClassName="text-white"
              subtitle="Powering homes, shops, and projects across Kathmandu Valley"
              subtitleClassName="text-white/75"
            />
            <p className="text-sm leading-relaxed text-white/80">
              Your trusted electrical products and services partner in Kathmandu Valley. Retail,
              wholesale, and professional services.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/65">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              {[
                { to: "/shop", label: "Products" },
                { to: "/services", label: "Services" },
                { to: "/wholesale", label: "Wholesale" },
                { to: "/brands", label: "Brands" },
                { to: "/about", label: "About Us" },
                { to: "/faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to as any} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/65">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Old Baneshwor, Kathmandu
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                9843766006, 9806814962
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                shuvaelectric12@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/65">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/85">
              <li>Sun - Fri: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 5:00 PM</li>
            </ul>
            <p className="mt-4 text-sm text-white/70">Serving Kathmandu, Lalitpur & Bhaktapur</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/65">
          &copy; {new Date().getFullYear()} Shuva Electric And Electronic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
