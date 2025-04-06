// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
// })
// import { defineConfig } from 'vite'

// export default defineConfig({
//   css: {
//     postcss: './postcss.config.js',  // Ensure PostCSS config is properly linked
//   },
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()]
// })
// import { defineConfig } from 'vite';

// export default defineConfig({
//   css: {
//     postcss: ['./postcss.config.cjs',tailwindcss()] // Point to the renamed file
//   },
// });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import postcss from './postcss.config.mjs';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss,
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.mjs',
  },
});