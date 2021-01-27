import types from "./types";

export const toggleModalVisibility = (modalContent?: {}) => ({
	type: types.TOGGLE_MODAL_VISIBILITY,
	modalContent: modalContent ? modalContent : null,
});

export const updateSearchQuery = (searchQuery: string) => ({
	type: types.UPDATE_SEARCH_QUERY,
	searchQuery,
});
