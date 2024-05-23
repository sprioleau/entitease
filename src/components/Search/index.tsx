"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { ClearIcon, SearchIcon } from "../Icon";

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchInputRef = React.useRef<HTMLInputElement>(null);

	const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;

		const params = new URLSearchParams(searchParams);
		if (searchTerm) {
			params.set("query", searchTerm);
		} else {
			params.delete("query");
		}

		replace(`${pathname}?${params.toString()}`);
	}, 300);

	function handleClearSearch() {
		replace(pathname);

		if (searchInputRef.current) {
			searchInputRef.current.value = "";
		}
	}

	return (
		<div className="search">
			<span className="search__icon search">
				<SearchIcon />
			</span>
			{searchInputRef.current && searchInputRef.current.value.length > 0 && (
				<span
					className="search__icon clear"
					onClick={handleClearSearch}
				>
					<ClearIcon />
				</span>
			)}
			<div className="search__input-wrapper">
				<input
					ref={searchInputRef}
					className="search__input"
					type="text"
					autoFocus={false}
					onChange={handleSearch}
					defaultValue={searchParams.get("query")?.toString()}
				/>
			</div>
		</div>
	);
}
