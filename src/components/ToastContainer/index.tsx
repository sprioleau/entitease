"use client";

import styles from "./index.module.scss";

import useToast from "@/hooks/useToast";

export default function ToastContainer() {
	const { message } = useToast();

	if (!message) return null;

	return (
		<div
			key={message}
			className={styles["toast"]}
		>
			{message}
		</div>
	);
}
