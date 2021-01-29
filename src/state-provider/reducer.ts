import constants from "./constants";
import { StateType } from "../types/types";

const initialState: StateType = {
	modalContent: null,
	searchQuery: "",
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case constants.TOGGLE_MODAL_VISIBILITY:
			const existingModalContent = state.modalContent !== null;

			let newModalContent: {} | null = {};
			if (!existingModalContent || action.modalContent) newModalContent = action.modalContent;
			if (existingModalContent && action.modalContent === null) newModalContent = null;

			return {
				...state,
				modalContent: newModalContent,
			};

		case constants.UPDATE_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.searchQuery,
			};

		default:
			return state;
	}
};

export default reducer;
