import qiankun from 'vite-plugin-qiankun';
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig (({ }) => ({
  base: '//localhost:3003/',
  plugins: [
    react(),
    qiankun('app-react18-vite', {
      useDevMode: true
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [],
      hashPrefix: 'qsvr'
    }
  },
  server: {
    cors: true,
    port: 3003,
    hmr: false,
    origin: '//localhost:3003',
    headers: {
      'access-control-allow-origin': '*'
    },
  }
}))
