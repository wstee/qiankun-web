import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => ({
  base: command === 'build' ? '' : '',
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './mock',
      watchFiles: true,
      prodEnabled: false,
      localEnabled: command !== 'build'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  build: {
    target: 'es2015',
    sourcemap: mode === 'development', // 测试
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // server: resolve(__dirname, 'server/index.html'),
      },
      output: {
        manualChunks: {
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/_variable.scss";',
      },
    },
  },
  server: {
    cors: true,
    proxy: {
      // '/server': {
      //   target: 'http://localhost:5173',
      //   // changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/server/, '/server.html'),
      // },
    },
  },
}))
