import React, { useState } from "react";
import LabelWithCopy from "./LabelWithCopy";
import entityDisplayValues from "../utilities/entityDisplayValues";
import {
	composeClasses,
	convertToMatchString,
	dashString,
	filterEntityBySearchQuery,
	isInSearchQuery,
} from "../utilities/utilityFunctions";
import Icon, { ArrowIcon } from "./Icon";
import { useSelector } from "react-redux";
import { selectSearchQuery } from "../state-provider/selectors";
import { EntitityCategory } from "../types/types";
import { entitiesList } from "../utilities/entitiesList";

const EntitiesList = () => {
	const searchQuery = useSelector(selectSearchQuery);
	const searchQueryMatchString = convertToMatchString(searchQuery);
	const [categoryFilter, setCategoryFilter] = useState("");
	const [filterActive, setFilterActive] = useState(false);

	let entities: EntitityCategory[] = [];

	if (searchQuery.length === 0 && categoryFilter.length === 0) {
		entities = entitiesList;
	} else if (searchQuery.length === 0 && filterActive) {
		entities = entitiesList.filter((entityGroup) => entityGroup.categoryLabel === categoryFilter);
	} else if (searchQuery.length > 0 && filterActive) {
		const filteredEntitiesGroup = (entities = entitiesList.filter(
			(entityGroup) => entityGroup.categoryLabel === categoryFilter
		));

		const filteredEntitiesBySearchQuery = filteredEntitiesGroup.map((entityGroup) => ({
			categoryLabel: entityGroup.categoryLabel,
			entities: filterEntityBySearchQuery(entityGroup.entities, searchQuery),
		}));

		entities = filteredEntitiesBySearchQuery;
	} else {
		entities = entitiesList
			.filter((entityGroup) =>
				entityGroup.entities.some(
					(entity) =>
						isInSearchQuery(entityGroup.categoryLabel, searchQuery) ||
						isInSearchQuery(entity.name, searchQuery) ||
						isInSearchQuery(entity.symbol, searchQuery) ||
						isInSearchQuery(entity.entity, searchQuery) ||
						isInSearchQuery(entity.unicode, searchQuery)
				)
			)
			.map((entityGroup) => {
				const filteredEntities = filterEntityBySearchQuery(entityGroup.entities, searchQuery);

				if (convertToMatchString(entityGroup.categoryLabel).includes(searchQueryMatchString)) {
					return { ...entityGroup, entities: filteredEntities.concat(entityGroup.entities) };
				}

				return { ...entityGroup, entities: filteredEntities };
			});
	}

	if (searchQuery.length > 0 && entities.length === 0)
		return (
			<div className="entities-list no-results">
				<h2 className="no-results-message">Sorry, no results for that search term.</h2>
			</div>
		);

	const handleFilterByCategory = (categoryLabel: string) => {
		if (!filterActive) {
			setFilterActive(true);
			setCategoryFilter(categoryLabel);
		} else {
			setFilterActive(false);
			setCategoryFilter("");
		}
	};

	const arrowIconClasses = {
		"entities-list__category-icon": "",
		"filter-active": filterActive,
	};

	return (
		<ul className="entities-list" lang="en">
			{entities.map((entityGroup: EntitityCategory) => (
				<React.Fragment key={entityGroup.categoryLabel}>
					<li className="entities-list__category">
						<h3 className="entities-list__category-label">
							{filterActive ? `Applied Filter: ${entityGroup.categoryLabel}` : entityGroup.categoryLabel}
						</h3>
						<span
							className={composeClasses(arrowIconClasses)}
							onClick={() => handleFilterByCategory(entityGroup.categoryLabel)}>
							<ArrowIcon />
						</span>
					</li>
					{entityGroup?.entities?.map((entity, index) => (
						<li key={`${entityGroup.categoryLabel}-${entity.name}-${index}`} className="entities-list__item">
							<div className="entities-list__positioner">
								<div className="entities-list__labels">
									{Object.keys(entityDisplayValues).map((key) => (
										<LabelWithCopy
											key={key}
											label={`${entityDisplayValues[key].label}${entity[key]}`}
											tag={entityDisplayValues[key].tag}
											className="entities-list__item-label"
											addClass={entityDisplayValues[key].addClass}
											textToCopy={entity[key]}
											copy={entityDisplayValues[key].copy}
											blank={entity.blank}
										/>
									))}
								</div>
								<div className="entities-list__navigation">
									<Icon
										link
										to={`/symbol/${dashString(entity.name)}`}
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
};

export default EntitiesList;
