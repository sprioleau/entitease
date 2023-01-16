import useStore from "@/store";
import { useEffect } from "react";

export default function useDismissOnOutsideClick(ref: any) {
	const modalContent = useStore((s) => s.modalContent);
	const clearModalContent = useStore((s) => s.clearModalContent);

	useEffect(() => {
		const handleClickOutside = (e: any) => {
			if (modalContent && ref.current && !ref.current.contains(e.target)) {
				clearModalContent();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
}
