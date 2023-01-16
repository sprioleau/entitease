import React from "react";
import { SearchIcon, ClearIcon } from "../components/Icon";
import useStore from "@/store";

const Search = () => {
	const searchQuery = useStore((s) => s.searchQuery);
	const updateSearchQuery = useStore((s) => s.updateSearchQuery);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateSearchQuery(e.target.value);
	};

	const handleClearSearch = () => {
		updateSearchQuery("");
	};

	return (
		<div className="search">
			<span className="search__icon search">
				<SearchIcon />
			</span>
			<span className="search__icon clear" onClick={handleClearSearch}>
				<ClearIcon />
			</span>
			<div className="search__input-wrapper">
				<input className="search__input" type="text" value={searchQuery} autoFocus={false} onChange={handleChange} />
			</div>
		</div>
	);
};

export default Search;
