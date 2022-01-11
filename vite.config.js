const { resolve } = require('path')
const { defineConfig } = require('vite')
import vitePluginPug from 'vite-plugin-pug'

module.exports = defineConfig({
	plugins: [vitePluginPug()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				en: resolve(__dirname, 'en/index.html'),
				imprint: resolve(__dirname, 'imprint/index.html'),
				'en/imprint': resolve(__dirname, 'en/imprint/index.html'),
				privacy: resolve(__dirname, 'privacy/index.html'),
				'en/privacy': resolve(__dirname, 'privacy/index.html'),
			},
		},
	},
})
