export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "PORTRAITS",
		link: "/",
	},
	{
		text: "VIDEOS",
		link: "/",
	},
	{
		text: "ADVERTISING",
		link: "/",
	},
	{
		text: "PRODUCTS",
		link: "/",
	},
	{
		text: "BY PHONE",
		link: "/",
	},
	{
		text: "ABOUT US",
		link: "/",
	},
];

export default navConfig;
