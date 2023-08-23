import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://118.89.120.239:7860', // 目标服务  
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			}
		}
	}
})