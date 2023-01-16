import { useEffect, useRef } from "react";
import useStore from "@/store";
import { useDismissOnOutsideClick } from "@/hooks";

const NOTIFICATION_DURATION = 100; // in seconds

interface PropTypes {
	isCopied: boolean;
	textToCopy: string;
}

const InfoCard: React.FunctionComponent<PropTypes> = ({ isCopied, textToCopy }) => {
	const wrapper = useRef<HTMLDivElement>(null);
	const clearModalContent = useStore((s) => s.clearModalContent);

	useEffect(() => {
		const timer = setTimeout(() => clearModalContent(), NOTIFICATION_DURATION * 1000);
		return () => clearTimeout(timer);
	}, [isCopied, clearModalContent]);

	useDismissOnOutsideClick(wrapper);

	return (
		<div ref={wrapper} className="info-card">
			<p className="info-card__message">{`${textToCopy} has been successfully copied!`}</p>
		</div>
	);
};

export default InfoCard;
