"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "../Icon";

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	function handleSearch(searchTerm: string) {
		if (searchTerm.length > 0) {
			params.set("query", searchTerm);
		} else {
			params.delete("query");
		}

		replace(`${pathname}?${params.toString()}`);
	}

	const debouncedHandleSearch = useDebouncedCallback(handleSearch, 300);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const searchTerm = event.target.value;

		if (searchTerm.length === 0) {
			return handleSearch(searchTerm);
		}

		return debouncedHandleSearch(searchTerm);
	}

	return (
		<div className="search">
			<span className="search__icon search">
				<SearchIcon />
			</span>
			<div className="search__input-wrapper">
				<input
					className="search__input"
					type="search"
					autoFocus={false}
					onChange={handleChange}
					defaultValue={searchParams.get("query")?.toString()}
				/>
			</div>
		</div>
	);
}
