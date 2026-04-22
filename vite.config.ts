// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/brands" },
      { path: "/contact" },
      { path: "/faq" },
      { path: "/services" },
      { path: "/shop" },
      { path: "/wholesale" },
    ],
    router: {
      entry: "./router.ts",
    },
    spa: {
      enabled: true,
    },
  },
});
