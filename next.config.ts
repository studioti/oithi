import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
		implementation: 'sass-embedded',
		silenceDeprecations: ['modern-js-api'],
	},
	compiler: {
		styledComponents: true
	}
}

module.exports = {
	reactStrictMode: false,
	trailingSlash: true,
	compress: true,
	images: { 
		unoptimized: true
	}
}

export default nextConfig;
