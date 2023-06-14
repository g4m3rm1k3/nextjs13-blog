export interface SiteConfig {
	siteName: string;
	description: string;
	currentlyAt: string;
	socialLinks: {
		twitter: string;
		youtube: string;
		github: string;
		linkedin: string;
	};
}

const siteConfig: SiteConfig = {
	siteName: 'Explorer',
	description:
		'A minimal and lovely travel blog which shares experiences and cities around the world!',
	currentlyAt: 'New Hampshire',
	socialLinks: {
		twitter: 'http',
		youtube: 'https',
		github: 'https',
		linkedin: 'https',
	},
};
export default siteConfig;
