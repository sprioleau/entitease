interface ActionType {
	[key: string]: string;
}

export const constants: ActionType = {
	TOGGLE_MODAL_VISIBILITY: "TOGGLE_MODAL_VISIBILITY",
	UPDATE_SEARCH_QUERY: "UPDATE_SEARCH_QUERY",
};

export default constants;
