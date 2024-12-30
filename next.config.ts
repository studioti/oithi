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
	trailingSlash: false,
	compress: true,
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


