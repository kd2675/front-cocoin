import path from 'path'
import * as os from 'node:os'

/** @type {import('next').NextConfig} */
const isLocal = process.env.NODE_ENV === 'local'
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const ENV = process.env.NODE_ENV

const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://jsonplaceholder.typicode.com/:path*'
			}
		]
	},
	env: {},
	basePath: '',
	reactStrictMode: false,
	swcMinify: true,
	trailingSlash: true,
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	) => {
		if (!isServer) {
			function getIPAdress() {
				const interfaces = os.networkInterfaces()

				for (let devName in interfaces) {
					const iface = interfaces[devName]
					for (let i = 0; i < iface.length; i++) {
						const alias = iface[i]
						if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
							return alias.address
						}
					}
				}
			}

			const serverUrl = `${nextConfig.serverRuntimeConfig.HTTP}://localhost:${nextConfig.serverRuntimeConfig.PORT}`
			console.log(`
App is running at:
- Local: ${serverUrl}
- Network: ${nextConfig.serverRuntimeConfig.HTTP}://${getIPAdress()}:${nextConfig.serverRuntimeConfig.PORT}
- ApiNetwork : ${process.env.NEXT_PUBLIC_API_SERVER_URL}
- MemberNetwork : ${process.env.NEXT_PUBLIC_MEMBER_SERVER_URL}
- FileNetwork : ${process.env.NEXT_PUBLIC_FILE_SERVER_URL}
- isLocal : ${isLocal}
- isDev : ${isDev}
- isProduction : ${isProd}
- ENV : ${ENV}
- HostName : ${nextConfig.serverRuntimeConfig.hostname}
			`)
		}

		return config
	},
	serverRuntimeConfig: { // Will only be available on the server side
		rootDir: path.join('./'),
		hostname: process.env.host,
		PORT: process.env.NEXT_PUBLIC_SERVER_PORT,
		HTTP: 'http'
	},
	publicRuntimeConfig: { // Will be available on both server and client
		staticFolder: '/public',
		isDev,
		isLocal,
		isProd,
		ENV
	},
	sassOptions: {
		includePaths: [path.join('styles')]
	},
	experimental: {
		scrollRestoration: true
	},
	images: {
		// formats: ['image/avif', 'image/webp'],
		// remotePatterns: [
		//   {
		//     protocol: 'http',
		//     hostname:  'test.com',
		//     port: '8803',
		//     pathname: '/file/image/show/**',
		//   },
		//   {
		//     protocol: 'http',
		//     hostname:  'test.com',
		//     port: '8903',
		//     pathname: '/file/image/show/**',
		//   },
		// ],
	}

}

export default nextConfig
