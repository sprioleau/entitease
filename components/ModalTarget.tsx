import { useSelector } from "react-redux";
import { selectModalContent } from "../state-provider/selectors";

const ModalTarget = () => {
	const modalContent = useSelector(selectModalContent);
	return <>{modalContent && <div className="modal">{modalContent}</div>}</>;
};

export default ModalTarget;
