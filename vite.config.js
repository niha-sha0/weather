import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), svgr()],
})

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/