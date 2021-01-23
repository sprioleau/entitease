import useClipboard from "react-use-clipboard";
import { toggleModalVisibility } from "../state-provider/actionCreators";
import { useDispatch } from "react-redux";
import InfoCard from "./InfoCard";

// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript

interface PropTypes {
	tag: keyof JSX.IntrinsicElements;
	label: string;
	addClass: string;
	textToCopy: string;
	copy: boolean;
}

const LabelWithCopy: React.FunctionComponent<PropTypes & React.HTMLAttributes<HTMLOrSVGElement>> = ({
	label,
	tag,
	addClass,
	textToCopy,
	copy,
}) => {
	const [isCopied, setCopied] = useClipboard(textToCopy);
	const dispatch = useDispatch();

	const handleCopy = () => {
		if (!copy) return null;
		setCopied();
		dispatch(toggleModalVisibility(<InfoCard textToCopy={textToCopy} isCopied={isCopied} />));
	};

	const CustomTag = `${tag}`;

	return (
		<CustomTag className={`entities-list__item-label ${addClass} ${copy ? "" : "no-copy"}`} onClick={handleCopy}>
			{label}
		</CustomTag>
	);
};

export default LabelWithCopy;
