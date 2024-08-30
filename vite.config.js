import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: '3000',
    https:false,
    open:true,
    cors:true,
    proxy: {
      // 配置代理服务器
      '/proxy-api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
   },
   resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
  }
})

