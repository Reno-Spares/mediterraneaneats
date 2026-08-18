import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves this project site from /<repo-name>/, so built asset
  // URLs need that prefix. The dev server stays at the root.
  base: command === 'build' ? '/mediterraneaneats/' : '/',
}))
