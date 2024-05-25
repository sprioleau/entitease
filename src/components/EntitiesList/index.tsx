"use client";

import entityDisplayValues from "@/constants/entityDisplayValues";
import { EntitityCategory } from "@/types/types";
import composeClasses from "@/utils/composeClasses";
import dashString from "@/utils/dashString";
import getFilteredEntitiesList from "@/utils/getFilteredEntitiesList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import Icon, { ArrowIcon } from "../Icon";
import LabelWithCopy from "../LabelWithCopy";

type Props = {
	query: string;
	category: string;
};

export default function EntitiesList({ query, category }: Props) {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace } = useRouter();

	const isFilterActive = Boolean(category);

	const filteredEntities = useMemo(() => {
		return getFilteredEntitiesList({
			query,
			category,
		});
	}, [query, category]);

	function handleFilterByCategory(categoryLabel: string) {
		if (category !== categoryLabel) {
			params.set("category", categoryLabel);
		} else {
			params.delete("category");
		}

		replace(`${pathname}?${params.toString()}`);
	}

	const arrowIconClasses = {
		"entities-list__category-icon": true,
		"filter-active": isFilterActive,
	};

	if (filteredEntities.length === 0) {
		return (
			<div className="entities-list no-results">
				<h2 className="no-results-message">Sorry, no results for that search term.</h2>
			</div>
		);
	}

	return (
		<ul
			className="entities-list"
			lang="en"
		>
			{filteredEntities.map((entityGroup: EntitityCategory) => (
				<React.Fragment key={entityGroup.categoryLabel}>
					<li className="entities-list__category">
						<h3 className="entities-list__category-label">
							{isFilterActive ? `Applied Filter: ${entityGroup.categoryLabel}` : entityGroup.categoryLabel}
						</h3>
						<span
							className={composeClasses(arrowIconClasses)}
							onClick={() => handleFilterByCategory(entityGroup.categoryLabel)}
						>
							<ArrowIcon />
						</span>
					</li>
					{entityGroup?.entities?.map((entity, index) => (
						<li
							key={`${entityGroup.categoryLabel}-${entity.name}-${index}`}
							className="entities-list__item"
						>
							<div className="entities-list__positioner">
								<div className="entities-list__labels">
									{Object.keys(entityDisplayValues).map((key) => {
										const typedKey = key as keyof typeof entityDisplayValues;

										return (
											<LabelWithCopy
												key={key}
												label={`${entityDisplayValues[typedKey].label}${entity[typedKey]}`}
												tag={entityDisplayValues[typedKey].tag}
												className="entities-list__item-label"
												addClass={entityDisplayValues[typedKey].addClass}
												textToCopy={entity[typedKey]}
												isBlank={entity.isBlank}
											/>
										);
									})}
								</div>
								<div className="entities-list__navigation">
									<Icon
										href={`/symbol/${dashString(entity.name)}`}
										addClass="arrow-icon"
										size="md"
										icon={<ArrowIcon />}
									/>
								</div>
							</div>
						</li>
					))}
				</React.Fragment>
			))}
		</ul>
	);
}
