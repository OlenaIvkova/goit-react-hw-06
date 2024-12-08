// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'


// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
});

