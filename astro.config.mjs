import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://learn-firebase-shareef.vercel.app/",
  integrations: [
    starlight({
      title: "Learn Firebase",
      social: {
        github: "https://github.com/shareef99",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
          collapsed: false,
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          collapsed: true,
        },
      ],
    }),
  ],
  server: {
    open: true,
    port: 3000,
    host: true,
  },
});
