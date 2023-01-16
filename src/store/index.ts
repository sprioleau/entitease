import { ReactNode } from "react";
import { create } from "zustand";

export type TInitialState = {
	modalContent: ReactNode | undefined;
	searchQuery: string;
};

type TGlobalState = TInitialState & {
	updateSearchQuery: (searchQuery: string) => void;
	clearModalContent: () => void;
	updateModalContent: (modalContent: ReactNode | undefined) => void;
};

const initialState: TInitialState = {
	modalContent: undefined,
	searchQuery: "",
};

const useStore = create<TGlobalState>()((set) => ({
	...initialState,

	updateSearchQuery: (searchQuery) => {
		set(() => ({
			searchQuery,
		}));
	},

	clearModalContent: () => {
		set(() => ({
			modalContent: undefined,
		}));
	},

	updateModalContent: (modalContent) => {
		set(() => ({
			modalContent,
		}));
	},
}));

export default useStore;
