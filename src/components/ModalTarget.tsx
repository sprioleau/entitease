import { useSelector } from "react-redux";
import { selectModalContent } from "../state-provider/selectors";

const ModalTarget = () => {
	const modalContent = useSelector(selectModalContent);

	if (!Boolean(modalContent)) return null;

	return <div className="modal">{modalContent}</div>;
};

export default ModalTarget;
