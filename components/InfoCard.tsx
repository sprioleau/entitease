import { useEffect } from "react";
import { toggleModalVisibility } from "../state-provider/actionCreators";
import { useDispatch } from "react-redux";

const InfoCard = ({ isCopied, textToCopy }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => dispatch(toggleModalVisibility()), 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, isCopied]);

	return (
		<div className="info-card">
			<h1>{`${textToCopy} has been successfully copied!`}</h1>
		</div>
	);
};

export default InfoCard;
