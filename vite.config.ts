import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import pxtorom from '@minko-fe/postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),],
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        pxtorom({
          rootValue: 16,
          propList: ['*'],
          atRules: ['media'],
        }),
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

