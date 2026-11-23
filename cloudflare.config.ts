import { defineConfig, triggers } from "cf/config";

export default defineConfig({
	worker: {
		name: "opensah-com-site",
		compatibilityDate: "2026-11-23",
		workersDev: false,
		previewUrls: false,
		assets: {
			htmlHandling: "auto-trailing-slash",
			notFoundHandling: "404-page",
		},
		// Zone routes (zone opensah.com) run before the proxied CNAMEs to the Pages
		// project opensah-com; removing them falls back to Pages.
		triggers: [
			triggers.fetch({ pattern: "opensah.com/*", zone: "dc9fb59c58bc9b848e616a68f752edca" }),
			triggers.fetch({ pattern: "www.opensah.com/*", zone: "dc9fb59c58bc9b848e616a68f752edca" }),
		],
	},
});
