"use client";

import Toast from "@/components/Toast";
import { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext<{ toast: (message: string) => void; message: string | undefined }>({
	toast: () => {},
	message: undefined,
});

export function ToastProvider({ children }: any) {
	const [message, setMessage] = useState<string | undefined>();

	useEffect(() => {
		const timeout = setTimeout(() => setMessage(undefined), 2500);

		return () => clearTimeout(timeout);
	}, [message]);

	function toast(message: string) {
		setMessage(message);
	}

	return (
		<ToastContext.Provider
			value={{
				toast,
				message,
			}}
		>
			{children}
			{message && <Toast message={message} />}
		</ToastContext.Provider>
	);
}

export default function useToast() {
	return useContext(ToastContext);
}
