import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	sassOptions: {
		implementation: 'sass-embedded'
	},

	compiler: {
		styledComponents: true
	}
}

module.exports = {
	output: 'export',
	compress: true,	
	trailingSlash: false,
	images: { 
		unoptimized: true
	},
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/pages',
	// 			destination: '/',
	// 			permanent: true
	// 		}
	// 	]
	// }
}

export default nextConfig


