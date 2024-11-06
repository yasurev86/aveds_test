import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ['./src', './app/styles'],
		prependData: `@import "@/app/styles/variables.scss"; @import "@/app/styles/mixins.scss";`,
	},
};

export default nextConfig;
