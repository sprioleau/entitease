import types from "./types";

interface InitialStateType {
	modalContent: {} | null;
	searchQuery: string;
}
const initialState: InitialStateType = {
	modalContent: null,
	searchQuery: "",
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case types.TOGGLE_MODAL_VISIBILITY:
			const existingModalContent = state.modalContent !== null;

			let newModalContent: {};
			if (!existingModalContent || action.modalContent) newModalContent = action.modalContent;
			if (existingModalContent && action.modalContent === null) newModalContent = null;

			return {
				...state,
				modalContent: newModalContent,
			};

		case types.UPDATE_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.searchQuery,
			};

		default:
			return state;
	}
};

export default reducer;
