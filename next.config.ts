import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	
	output: 'export',

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
