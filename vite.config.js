// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  theme: {
    extend: {
      backgroundImage: {
        "gradient-moving":
          "linear-gradient(-45deg, #6b21a8, #0f172a, #6b21a8, #1e1b4b)",
      },
      animation: {
        "gradient-x": "gradientX 10s ease infinite",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
