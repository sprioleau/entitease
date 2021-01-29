import { StateType } from "../types/types";

export const selectModalContent = (state: StateType) => state.modalContent;
export const selectSearchQuery = (state: StateType) => state.searchQuery;
