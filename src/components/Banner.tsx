import React from "react";
import Link from "next/link";

const Banner = () => {
	return (
		<div className="banner">
			<Link href="/">
				<a>
					<span className="banner__logo">&#8779;</span>
					<h1 className="banner__page-title">Entitease</h1>
				</a>
			</Link>
		</div>
	);
};

export default Banner;
