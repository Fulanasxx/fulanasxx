import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/fulanasxx/', // Asegúrate de que el base apunte a tu repositorio en GitHub Pages
  assetsInclude: ['**/*.stl'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});