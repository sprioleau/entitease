import { Metadata, Viewport } from "next";

const fullName = "Entitease";
const title = "EntitEase | Find your symbols with ease";
const description = "Easily find and copy any HTML entity or symbol you may need while developing.";
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const baseUrl = `${protocol}://${process.env.VERCEL_URL}`;
const keywords = [
	fullName,
	"Entitease",
	"HTML",
	"CSS",
	"HTML entities",
	"HTML entities list",
	"Unicode",
	"HTML",
	"Entities",
	"Entity",
	"Reference",
	"Chart",
	"Symbols",
	"Copy",
	"Paste",
	"Search",
];

const baseOgConfig = {
	title,
	description,
	images: [
		{
			url: "/images/social-card_1200x630px.png",
			width: 1200,
			height: 630,
			alt: description,
		},
	],
};

const metadataBase = new URL(baseUrl);

export const homepageViewport: Viewport = {
	initialScale: 1,
	width: "device-width",
	themeColor: "#264653",
	colorScheme: "dark",
};

export const homepageMetadata: Metadata = {
	title,
	description,
	applicationName: "Entitease",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	icons: {
		icon: "/favicon.ico",
	},
	// manifest: "/manifest.json",
	keywords,
	authors: [{ name: fullName, url: baseUrl }],
	creator: fullName,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase,
	openGraph: {
		...baseOgConfig,
		url: baseUrl,
		siteName: title,
		locale: "en-US",
		type: "website",
	},
	twitter: baseOgConfig,
};
