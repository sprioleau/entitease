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

export const OutlinedArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.25 310.86">
		<path
			d="M3.21,155.43,155.43,3.21l35.46,35.46L99.21,130.35H279V180.5H99.21l91.68,91.69-35.46,35.46Z"
			fill="none"
			stroke="#f5bf16"
			strokeMiterlimit="10"
			strokeWidth="4.54"
		/>
	</svg>
);

export const ArrowIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 215.27 215.27"
		width="100%"
		height="100%"
		className="icon arrow-icon"
	>
		<path d="M215.27,0V215.27H165.12V85.61L38,212.73,2.54,177.27,129.66,50.15H0V0Z" fill="#f5bf16" />
	</svg>
);

export const SearchIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5" width="2rem" height="2rem">
		<path
			d="M199.39,163.93a107.6,107.6,0,1,0-35.46,35.46L199,234.5,234.5,199Zm-91.76,1.19a57.49,57.49,0,1,1,57.49-57.49A57.49,57.49,0,0,1,107.63,165.12Z"
			fill="#f5bf16"
		/>
	</svg>
);

export const ClearIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.68 187.68" width="2rem" height="2rem">
		<polygon
			points="187.68 35.46 152.22 0 93.84 58.38 35.46 0 0 35.46 58.38 93.84 0 152.22 35.46 187.68 93.84 129.3 152.22 187.68 187.68 152.22 129.3 93.84 187.68 35.46"
			fill="#f5bf16"
		/>
	</svg>
);
