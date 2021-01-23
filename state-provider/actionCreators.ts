import types from "./types";

export const toggleModalVisibility = (modalContent?: {}) => ({
	type: types.TOGGLE_MODAL_VISIBILITY,
	modalContent: modalContent ? modalContent : null,
});
