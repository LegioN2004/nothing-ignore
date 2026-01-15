import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // ADD THIS SECTION:
    preview: {
        host: true, // Listens on all addresses (0.0.0.0)
        port: 8082, // Ensures it matches your start command
        allowedHosts: [
            "fe.milinda.me", // Allow your specific domain
            "www.fe.milinda.me", // Optional: Allow www subdomain
            "be.milinda.me", // Allow your specific domain
            "www.be.milinda.me", // Optional: Allow www subdomain
        ],
    },
});
