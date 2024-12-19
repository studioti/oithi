import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  	/* config options here */
	
	reactStrictMode: true,

	output: 'export', // This will make our build static

	distDir: 'build',

	sassOptions: {
		implementation: 'sass-embedded'
	},

	compiler: {
		styledComponents: true
	}
}

export default nextConfig

module.exports = {
	async redirects() {
		return [
			{
				source: '/pages',
				destination: '/',
				permanent: true
			}
		]
	}
}
