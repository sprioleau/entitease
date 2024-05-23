import "@/styles/index.scss";

import { homepageMetadata, homepageViewport } from "@/seo/metadata";

export const metadata = homepageMetadata;
export const viewport = homepageViewport;

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="app">{children}</div>
			</body>
		</html>
	);
}
