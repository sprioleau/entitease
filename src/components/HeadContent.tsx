import React from "react";
import Head from "next/head";

interface PropTypes {
	customTitle?: string;
}

const HeadContent: React.FC<PropTypes> = ({ customTitle }) => {
	const productionUrl = "https://entitease.vercel.app";
	const description = "Easily find and copy any HTML entity or symbol you may need while developing.";
	const primaryTitle = "EntitEase | Find your symbols with ease";

	return (
		<Head>
			<title>{customTitle ? customTitle : primaryTitle}</title>
			<link rel="icon" href="/favicon.ico" />

			{/* Basic HTML meta tags */}
			<meta name="description" content={description} />
			<meta name="keywords" content="HTML,Entities,Entity,Reference,Chart,Symbols,Copy,Paste,Search" />
			<meta name="author" content="San'Quan Prioleau" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* Facebook Open Graph */}
			<meta property="og:title" content={primaryTitle} />
			<meta property="og:site_name" content="EntitEase" />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={`${productionUrl}/social-card_1200x630px.png`} />
			<meta property="og:url" content={productionUrl} />

			{/* Twitter */}
			<meta name="twitter:title" content={primaryTitle} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={`${productionUrl}/social-card_1200x630px.png`} />
		</Head>
	);
};

export default HeadContent;
