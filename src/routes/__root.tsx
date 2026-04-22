import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CursorTrail from "../components/CursorTrail";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildSeoMeta,
  siteDescription,
  siteTitle,
} from "../lib/seo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    ...buildSeoMeta({
      title: siteTitle,
      description: siteDescription,
      path: "/",
      keywords: [
        "electrical showroom Kathmandu",
        "electrical wholesale Kathmandu",
        "electrical repair Kathmandu",
      ],
    }),
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Shuva Electric And Electronic" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
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
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    ...(pathname !== "/" && breadcrumbNameMap[pathname]
      ? [{ name: breadcrumbNameMap[pathname], item: pathname }]
      : []),
  ];

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
      <Outlet />
      <Footer />
    </>
  );
}
