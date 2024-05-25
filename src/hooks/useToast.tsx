"use client";

import ToastContainer from "@/components/ToastContainer";
import { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext<{ toast: (message: string) => void; message: string | undefined }>({
	toast: () => {},
	message: undefined,
});

type ToastProviderProps = {
	children: React.ReactNode;
	duration?: number;
};

export function ToastProvider({ children, duration = 2500 }: ToastProviderProps) {
	const [message, setMessage] = useState<string | undefined>();

	useEffect(() => {
		const timeout = setTimeout(() => setMessage(undefined), duration);
		return () => clearTimeout(timeout);
	}, [message, duration]);

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
			<ToastContainer />
		</ToastContext.Provider>
	);
}

export default function useToast() {
	return useContext(ToastContext);
}
