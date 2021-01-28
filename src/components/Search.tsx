import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon, ClearIcon } from "../components/Icon";
import { updateSearchQuery } from "../state-provider/actionCreators";
import { selectSearchQuery } from "../state-provider/selectors";

const Search = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectSearchQuery);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateSearchQuery(e.target.value));
	};

	const handleClearSearch = () => {
		dispatch(updateSearchQuery(""));
	};

	return (
		<div className="search">
			<span className="search__icon search">
				<SearchIcon />
			</span>
			<span className="search__icon clear" onClick={handleClearSearch}>
				<ClearIcon />
			</span>
			<input className="search__input" type="text" value={searchQuery} autoFocus={false} onChange={handleChange} />
		</div>
	);
};

export default Search;
