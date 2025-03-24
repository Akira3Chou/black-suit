export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "BLACK SUIT",
	// Your website's title and description (meta fields)
	title: "BLACK SUIT",
	description:
		"We are a company focusing on providing a wide range of photography services to enterprises.We take good care of the image and deliver high-quality standard service to help you perform better and more efficiently on your Business.Our mission is to work together with you to build professional and classic corporate image, which will contribute positively to your business growth.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Mr Li , Studio Manager",
		email: "01@heixifu.com",
		twitter: "BLACK_SUIT",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/logo-min.png",
		alt: "BLACK SUIT",
	},
};

export default siteData;
