import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    build: {
        // Cambia la salida de la construcción a 'public/build'
        outDir: 'public/build',  // Coloca los archivos de salida en public/build
        emptyOutDir: true,  // Esto asegura que la carpeta 'public/build' se limpie antes de generar nuevos archivos
    },
});
