import { useEffect, useRef } from "react";
import { toggleModalVisibility } from "../state-provider/actionCreators";
import { selectModalContent } from "../state-provider/selectors";
import { useDispatch, useSelector } from "react-redux";

const NOTIFICATION_DURATION = 3; // in seconds

const InfoCard = ({ isCopied, textToCopy }) => {
	const dispatch = useDispatch();
	const wrapper = useRef(null);
	const modalContent = useSelector(selectModalContent);

	useEffect(() => {
		const timer = setTimeout(() => dispatch(toggleModalVisibility()), NOTIFICATION_DURATION * 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, isCopied]);

	const useDismissOnOutsideClick = (ref) => {
		const handleClickOutside = (event) => {
			if (modalContent && ref.current && !ref.current.contains(event.target)) {
				dispatch(toggleModalVisibility());
			}
		};

		useEffect(() => {
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		});
	};

	useDismissOnOutsideClick(wrapper);

	return (
		<div ref={wrapper} className="info-card">
			<h1>{`${textToCopy} has been successfully copied!`}</h1>
		</div>
	);
};

export default InfoCard;
