import { defineConfig } from 'vite'
import WindiCSS, { exclude } from 'vite-plugin-windicss'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  test: {
    environment: "jsdom",
  }
})
