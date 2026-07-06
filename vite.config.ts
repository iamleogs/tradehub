import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const supabaseUrl = env.VITE_SUPABASE_URL ?? '';

  return {
    plugins: [react()],
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')
            ) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/@supabase/')) {
              return 'vendor-supabase';
            }
            if (id.includes('node_modules/lucide-react/')) {
              return 'vendor-lucide';
            }
          },
        },
      },
      chunkSizeWarningLimit: 600,
    },
    server: {
      proxy: {
        '/functions': { target: supabaseUrl, changeOrigin: true, secure: true },
        '/rest':      { target: supabaseUrl, changeOrigin: true, secure: true },
        '/auth':      { target: supabaseUrl, changeOrigin: true, secure: true },
      },
    },
  };
});
