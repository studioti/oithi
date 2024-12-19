import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	sassOptions: {
		implementation: 'sass-embedded'
	},

	compiler: {
		styledComponents: true
	}
}

export default nextConfig

module.exports = {

	output: "export",
	
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
