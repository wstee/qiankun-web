import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import qiankun from "vite-plugin-qiankun";
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  return ({
    base: command === 'build' ? '/app-vue3/' : '',
    plugins: [
      vue(),
      qiankun('app-vue3', {
        useDevMode: true
      }),
      viteMockServe({
        mockPath: './mock',
        watchFiles: true,
        prodEnabled: false,
        localEnabled: command !== 'build'
      }),
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
            echarts: ['echarts'],
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
      port: 3001,
      origin: '//localhost:3001/',
      headers: {
        'access-control-allow-origin': '*'
      },
      proxy: {
        // '/server': {
        //   target: 'http://localhost:5173',
        //   // changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/server/, '/server.html'),
        // },
      },
    },
  })
});
