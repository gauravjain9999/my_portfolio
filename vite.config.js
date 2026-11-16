import { defineConfig, loadEnv } from "vite";

const required = [
  "VITE_FONT_PRECONNECT_URL",
  "VITE_FONT_ASSETS_PRECONNECT_URL",
  "VITE_FONT_STYLESHEET_URL",
  "VITE_EMAIL_LINK",
  "VITE_EMAIL_ADDRESS",
  "VITE_PHONE_LINK",
  "VITE_PHONE_DISPLAY",
  "VITE_LINKEDIN_ABOUT_URL",
  "VITE_GITHUB_ABOUT_URL",
  "VITE_LINKEDIN_CONTACT_URL",
  "VITE_GITHUB_CONTACT_URL",
  "VITE_KEEP_NOTES_URL",
];

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), "VITE_"), ...process.env };
  const missing = required.filter(name => !env[name]?.trim());
  if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
  return {};
});
