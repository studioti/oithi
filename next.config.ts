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
	trailingSlash: true,
	compress: true,
	images: { 
		unoptimized: true
	},
	// output: 'export',
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


