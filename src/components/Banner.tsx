import React from "react";
import Link from "next/link";
import { Logo } from "./Icon";

const Banner = () => {
	return (
		<div className="banner">
			<Link href="/">
				<a>
					<span className="banner__logo">
						<Logo />
					</span>
					<h1 className="banner__page-title">EntitEase</h1>
				</a>
			</Link>
		</div>
	);
};

export default Banner;
