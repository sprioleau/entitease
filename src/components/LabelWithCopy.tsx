import InfoCard from "./InfoCard";
import { composeClasses } from "../utilities/utilityFunctions";
import { useState } from "react";
import useStore from "@/store";

interface PropTypes {
	[key: string]: any;
	tag: keyof JSX.IntrinsicElements | string;
	label: string;
	className?: any;
	addClass?: any;
	textToCopy?: any;
	copy: boolean;
	blank?: boolean;
}

interface ListItemClassesTypes {
	[key: string]: any;
	copy: any;
	blank: any;
}

const LabelWithCopy: React.FC<PropTypes> = ({ label, tag, className, addClass, textToCopy, copy, blank }) => {
	const [isCopied, setIsCopied] = useState(textToCopy);
	const updateModalContent = useStore((s) => s.updateModalContent);

	const handleCopy = () => {
		if (!copy) return null;
		navigator.clipboard.writeText(textToCopy);
		setIsCopied("");
		updateModalContent(<InfoCard textToCopy={textToCopy} isCopied={isCopied} />);
	};

	const CustomTag: any = `${tag}`;

	const listItemClasses: ListItemClassesTypes = {
		[className]: className ? true : null,
		[addClass]: addClass ? true : null,
		copy,
		blank,
	};

	return (
		<CustomTag className={composeClasses(listItemClasses)} onClick={handleCopy}>
			{label}
		</CustomTag>
	);
};

export default LabelWithCopy;
