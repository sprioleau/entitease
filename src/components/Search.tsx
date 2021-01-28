import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

const SearchIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5" width="2rem" height="2rem">
		<path
			d="M199.39,163.93a107.6,107.6,0,1,0-35.46,35.46L199,234.5,234.5,199Zm-91.76,1.19a57.49,57.49,0,1,1,57.49-57.49A57.49,57.49,0,0,1,107.63,165.12Z"
			fill="#f5bf16"
		/>
	</svg>
);

const ClearIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.68 187.68" width="2rem" height="2rem">
		<polygon
			points="187.68 35.46 152.22 0 93.84 58.38 35.46 0 0 35.46 58.38 93.84 0 152.22 35.46 187.68 93.84 129.3 152.22 187.68 187.68 152.22 129.3 93.84 187.68 35.46"
			fill="#f5bf16"
		/>
	</svg>
);

export default Search;
