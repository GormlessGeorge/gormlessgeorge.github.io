import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/_mixins.scss";
        `
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ]
  },
});

// @import "./src/styles/_animations.scss";
// @import "./src/styles/_variables.scss";
// @import "./src/styles/_mixins.scss";
// @import "./src/styles/_helpers.scss";