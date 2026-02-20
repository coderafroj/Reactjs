import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Example for React
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

// https://vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add the plugin here
  ],
});
