import restart from 'vite-plugin-restart'
import { resolve } from 'path'

export default {
    base: './', // Ensure assets are referenced with relative paths
    root: 'src/',
    publicDir: '../static/',
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                gamma: resolve(__dirname, 'src/gamma.html'),
            }
        }
    },
    plugins: [
        restart({ restart: [ '../static/**', ] })
    ],
}
