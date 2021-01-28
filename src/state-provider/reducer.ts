import types from "./types";
import { StateType } from "../types/types";
import { entitiesList } from "../utilities/entitiesList";

const initialState: StateType = {
	modalContent: null,
	searchQuery: "",
	entitiesList: entitiesList,
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case types.TOGGLE_MODAL_VISIBILITY:
			const existingModalContent = state.modalContent !== null;

			let newModalContent: {} | null = {};
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
