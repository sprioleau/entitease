import useClipboard from "react-use-clipboard";
import { toggleModalVisibility } from "../state-provider/actionCreators";
import { useDispatch } from "react-redux";
import InfoCard from "./InfoCard";
import { composeClasses } from "../utilities/utilityFunctions";

// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript

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
	const [isCopied, setCopied] = useClipboard(textToCopy);
	const dispatch = useDispatch();

	const handleCopy = () => {
		if (!copy) return null;
		setCopied();
		dispatch(toggleModalVisibility(<InfoCard textToCopy={textToCopy} isCopied={isCopied} />));
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
