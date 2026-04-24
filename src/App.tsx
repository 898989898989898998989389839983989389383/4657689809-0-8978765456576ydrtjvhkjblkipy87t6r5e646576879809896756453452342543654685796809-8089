import { useEffect, useMemo, useSyncExternalStore } from "react";
import CursorTrail from "@/components/CursorTrail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "@/components/AppLink";
import AboutPage from "@/routes/about";
import BrandsPage from "@/routes/brands";
import ContactPage from "@/routes/contact";
import FAQPage from "@/routes/faq";
import HomePage from "@/routes";
import ServicesPage from "@/routes/services";
import ShopPage from "@/routes/shop";
import WholesalePage from "@/routes/wholesale";
import { buildBreadcrumbJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo";

const routes: Record<string, { title: string; component: () => React.ReactNode }> = {
  "/": { title: "Shuva Electric And Electronic", component: HomePage },
  "/shop": { title: "Products | Shuva Electric And Electronic", component: ShopPage },
  "/services": { title: "Services | Shuva Electric And Electronic", component: ServicesPage },
  "/wholesale": { title: "Wholesale | Shuva Electric And Electronic", component: WholesalePage },
  "/brands": { title: "Brands | Shuva Electric And Electronic", component: BrandsPage },
  "/about": { title: "About | Shuva Electric And Electronic", component: AboutPage },
  "/contact": { title: "Contact | Shuva Electric And Electronic", component: ContactPage },
  "/faq": { title: "FAQ | Shuva Electric And Electronic", component: FAQPage },
};

const breadcrumbNameMap: Record<string, string> = {
  "/": "Home",
  "/shop": "Products",
  "/services": "Services",
  "/wholesale": "Wholesale",
  "/brands": "Brands",
  "/about": "About",
  "/contact": "Contact",
  "/faq": "FAQ",
};

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("app:navigate", callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("app:navigate", callback);
  };
}

function getPathname() {
  return window.location.pathname || "/";
}

function TawkChatLoader() {
  useEffect(() => {
    const isBot = /bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent);
    if (isBot || document.querySelector('script[data-tawk-chat="true"]')) return;

    const loadTawk = () => {
      if (document.querySelector('script[data-tawk-chat="true"]')) return;

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/69e0745b3f5fe21c385b0479/1jmacd29b";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      script.setAttribute("data-tawk-chat", "true");
      document.body.appendChild(script);
    };

    let timeoutId: number | undefined;
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadTawk, { timeout: 4000 });
    } else {
      timeoutId = window.setTimeout(loadTawk, 2500);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const pathname = useSyncExternalStore(subscribe, getPathname, () => "/");
  const activeRoute = routes[pathname];
  const Page = activeRoute?.component ?? NotFoundPage;

  const breadcrumbItems = useMemo(
    () => [
      { name: "Home", item: "/" },
      ...(pathname !== "/" && breadcrumbNameMap[pathname]
        ? [{ name: breadcrumbNameMap[pathname], item: pathname }]
        : []),
    ],
    [pathname],
  );

  useEffect(() => {
    document.title = activeRoute?.title ?? "Page not found | Shuva Electric And Electronic";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeRoute?.title, pathname]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessJsonLd(pathname)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)),
        }}
      />
      <TawkChatLoader />
      <CursorTrail />
      <Header />
      <Page />
      <Footer />
    </>
  );
}
