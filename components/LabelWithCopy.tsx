import useClipboard from "react-use-clipboard";
import { toggleModalVisibility } from "../state-provider/actionCreators";
import { useDispatch } from "react-redux";
import InfoCard from "./InfoCard";
import { composeClasses } from "../utilities/utilityFunctions";

// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript

interface PropTypes {
	tag: keyof JSX.IntrinsicElements;
	label: string;
	className?: string;
	addClass?: string;
	textToCopy: string;
	copy: boolean;
	blank?: boolean;
}

const LabelWithCopy: React.FunctionComponent<PropTypes & React.HTMLAttributes<HTMLOrSVGElement>> = ({
	label,
	tag,
	className,
	addClass,
	textToCopy,
	copy,
	blank,
}) => {
	const [isCopied, setCopied] = useClipboard(textToCopy);
	const dispatch = useDispatch();

	const handleCopy = () => {
		if (!copy) return null;
		setCopied();
		dispatch(toggleModalVisibility(<InfoCard textToCopy={textToCopy} isCopied={isCopied} />));
	};

	const CustomTag = `${tag}`;

	const listItemClasses = {
		[className]: className ? true : null,
		[addClass]: addClass ? true : null,
		"no-copy": !copy,
		blank,
	};

	return (
		<CustomTag className={composeClasses(listItemClasses)} onClick={handleCopy}>
			{label}
		</CustomTag>
	);
};

export default LabelWithCopy;
