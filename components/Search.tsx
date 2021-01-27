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

	return (
		<div className="search">
			<span className="search__icon">
				<SearchIcon />
			</span>
			<input className="search__input" type="text" value={searchQuery} autoFocus={false} onChange={handleChange} />
		</div>
	);
};

const SearchIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.5 234.5" width="2.25rem" height="2.25rem">
		<path
			d="M199.39,163.93a107.6,107.6,0,1,0-35.46,35.46L199,234.5,234.5,199Zm-91.76,1.19a57.49,57.49,0,1,1,57.49-57.49A57.49,57.49,0,0,1,107.63,165.12Z"
			fill="#f5bf16"
		/>
	</svg>
);

export default Search;
