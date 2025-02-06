// import { defineConfig } from 'vite'
// import { resolve } from 'path'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig((mode) => {
//     return {
//         plugins: [
//             tailwindcss(),
//         ],
//         base: '/static/', // Important later!
//         build: {
//             manifest: true,
//             emptyOutDir: true,
//             outDir: resolve('./dist'), // Important later!
//             rollupOptions: {
//                 input: {
//                     tailwind: resolve('./src/style.css'),
//                 },
//             },
//         },
//     };
// });

import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: '/static/', // Important for Django to locate assets
    build: {
        manifest: true,
        emptyOutDir: true,
        outDir: resolve(__dirname, 'dist'), // Ensure the output folder is 'dist'
        rollupOptions: {
            input: {
                tailwind: resolve(__dirname, 'src/style.css'),
            },
        },
    },
    server: {
        watch: {
            usePolling: true, // Ensures Django templates are watched
            ignored: ['!../templates/**/*'], // Make sure templates are included
        },
    },
});


// ChatGPT:

// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default defineConfig({
//   plugins: [],
//   base: '/static/',
//   build: {
//     manifest: true,
//     emptyOutDir: true,
//     outDir: resolve(__dirname, 'dist'),
//     rollupOptions: {
//       input: {
//         tailwind: resolve(__dirname, 'src/style.css'),
//       },
//     },
//   },
//   server: {
//     watch: {
//       usePolling: true, // Ensures changes in Django templates trigger updates
//     },
//   },
// });
