import React from "react";
import Link from "next/link";
import { composeClasses } from "../utilities/utilityFunctions";

const Icon = ({ icon, addClass, link, to, size }): any => {
	const iconClasses = {
		icon: "",
		[size]: size ? true : null,
		[addClass]: addClass ? true : null,
	};

	const embeddedIcon = <span className={composeClasses(iconClasses)}>{icon}</span>;

	return link ? (
		<Link href={to}>
			<a className={`${addClass}-link`}>{embeddedIcon}</a>
		</Link>
	) : (
		{ embeddedIcon }
	);
};

export default Icon;
