import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'index.html',
        curriculum: 'curriculum.html',
        contatti: 'contatti.html'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
