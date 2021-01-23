import types from "./types";

interface InitialStateType {
	modalContent: {} | null;
}

const initialState: InitialStateType = {
	modalContent: null,
};

const reducer = (state = initialState, action) => {
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

		default:
			return state;
	}
};

export default reducer;
