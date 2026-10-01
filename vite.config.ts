import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build` outputs dist/index.html with all CSS and JS inlined, plus the resume PDF.
// That folder works on any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront)
// and also opens directly from disk by double-clicking index.html.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: { outDir: 'dist' },
});
