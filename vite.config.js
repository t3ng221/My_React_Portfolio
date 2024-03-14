import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/My_React_Portfolio/',
  plugins: [react()],
  build: {
    OutDir: ' build',
  },  
})
