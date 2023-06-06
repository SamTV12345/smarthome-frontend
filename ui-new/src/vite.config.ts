import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base:'/ui/',
    plugins: [react()],
    server:{
        proxy:{
            '/status':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
            '/states':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
            '/device':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
            '/capability':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
            '/message':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
            '/interaction':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
            '/hash':{
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            }
        }
    }
})
