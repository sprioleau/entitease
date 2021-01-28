import constants from "./constants";

export const toggleModalVisibility = (modalContent?: {}) => ({
	type: constants.TOGGLE_MODAL_VISIBILITY,
	modalContent: modalContent ? modalContent : null,
});

export const updateSearchQuery = (searchQuery?: string) => ({
	type: constants.UPDATE_SEARCH_QUERY,
	searchQuery,
});
