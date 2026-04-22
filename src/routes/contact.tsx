import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock, ReceiptText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoMeta({
      title: "Contact Shuva Electric And Electronic | Old Baneshwor, Kathmandu",
      description:
        "Contact Shuva Electric And Electronic for electrical product enquiries, electrician bookings, wholesale quotes, and showroom visits in Old Baneshwor, Kathmandu.",
      path: "/contact",
      keywords: ["contact electrical shop Kathmandu", "Shuva Electric phone number", "Old Baneshwor electrical store"],
    }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  return (
    <main className="bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Get in Touch"
          description="Reach out to Shuva Electric And Electronic for product enquiries, service support, and wholesale requirements."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">Old Baneshwor, Kathmandu</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone Numbers</p>
                    <a href="tel:+9779843766006" className="block text-sm text-primary hover:underline">
                      9843766006
                    </a>
                    <a href="tel:+9779806814962" className="block text-sm text-primary hover:underline">
                      9806814962
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/9779843766006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      9843766006
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:shuvaelectric12@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      shuvaelectric12@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ReceiptText className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">VAT Number</p>
                    <p className="text-sm text-muted-foreground">6075128686</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Sun - Fri: 9 AM - 7 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday: 10 AM - 5 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                src="https://www.google.com/maps?q=Old%20Baneshwor%2C%20Kathmandu&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shuva Electric And Electronic location"
              />
            </div>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 shadow-card lg:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-2 text-lg font-semibold text-foreground">Send Us a Message</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Share your requirement and we will get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="98XXXXXXXX"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us what you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
