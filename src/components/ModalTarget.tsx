import useStore from "@/store";

const ModalTarget = () => {
	const modalContent = useStore((s) => s.modalContent);

	if (!modalContent) return null;

	return <div className="modal">{modalContent}</div>;
};

export default ModalTarget;
