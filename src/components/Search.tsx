import React, { useRef } from "react";
import { useDebounceCallback } from "@react-hook/debounce";
import { SearchIcon, ClearIcon } from "../components/Icon";
import useStore from "@/store";

const Search = () => {
	const updateSearchQuery = useStore((s) => s.updateSearchQuery);
	const searchQueryRef = useRef<HTMLInputElement>(null);

	const debouncedCallback = useDebounceCallback(() => updateSearchQuery(searchQueryRef?.current?.value ?? ""), 150);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		debouncedCallback();
	};

	const handleClearSearch = () => {
		updateSearchQuery("");
		if (searchQueryRef.current) searchQueryRef.current.value = "";
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
				<input ref={searchQueryRef} className="search__input" type="text" autoFocus={false} onChange={handleChange} />
			</div>
		</div>
	);
};

export default Search;
