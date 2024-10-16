import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // 不外部化任何依賴，將所有內容捆綁到一個文件中
      external: [],
      output: {
        // 為 UMD 格式設置全局變量名稱
        // 雖然在這個情境下不需要，但保留以防未來需要
        globals: {},
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/main.js'), // 自包含的入口文件
      name: 'MyVueLibrary',
      fileName: () => 'my-vue-library.js', // 單一文件
      formats: ['es', 'umd'], // 可以選擇多種格式，根據需要調整
    },
    // 禁用 CSS 代碼分割，將所有 CSS 打包到 JS 中
    cssCodeSplit: false,
  },
})
