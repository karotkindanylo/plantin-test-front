import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
});
