import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import knipConfig from './knip.json' assert { type: 'json' };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
