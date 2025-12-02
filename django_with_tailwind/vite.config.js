import { defineConfig } from 'vite';
import { resolve } from 'path';
// import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        // tailwindcss(),
    ],
    base: '/static/', // Important for Django to locate assets
    build: {
        manifest: true,
        // emptyOutDir: true,
        // outDir: resolve(__dirname, 'dist'), // Ensure the output folder is 'dist'
        outDir: resolve("./assets"), // Ensure the output folder is 'dist'
        assetsDir: "djnago-assets",
        rollupOptions: {
            input: {
                test: resolve('./static/js/main.js'),
            },
        },
    },
    // server: {
    //     watch: {
    //         usePolling: true, // Ensures Django templates are watched
    //         ignored: ['!../templates/**/*'], // Make sure templates are included
    //     },
    //     origin: 'http://localhost:5173', // Add this line
    //     host: true,
    //     port: 5173,
    // },
});