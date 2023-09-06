import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import saurus from "vite-plugin-saurus"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), saurus()],
})
