import React from "react";
import LabelWithCopy from "./LabelWithCopy";
import entityDisplayValues from "../utilities/entityDisplayValues";
import { convertToMatchString, dashString } from "../utilities/utilityFunctions";
import Icon, { ArrowIcon } from "./Icon";
import { useSelector } from "react-redux";
import { selectSearchQuery, selectEntitiesList } from "../state-provider/selectors";
import { EntitityCategory } from "../types/types";

const EntitiesList = () => {
	const searchQuery = useSelector(selectSearchQuery);
	const entitiesList = useSelector(selectEntitiesList);
	const searchQueryMatchString = convertToMatchString(searchQuery);

	let entities: EntitityCategory[] = [];

	if (searchQuery.length === 0) {
		entities = entitiesList;
	} else {
		entities = entitiesList
			// .flatMap(({ entities }) => entities)
			.filter(
				(entityGroup) =>
					entityGroup.entities.some(
						(entity) =>
							convertToMatchString(entityGroup.categoryLabel).includes(searchQueryMatchString) ||
							convertToMatchString(entity.name).includes(searchQueryMatchString) ||
							convertToMatchString(entity.symbol).includes(searchQueryMatchString) ||
							convertToMatchString(entity.entity).includes(searchQueryMatchString) ||
							convertToMatchString(entity.unicode).includes(searchQueryMatchString)
					)
				// convertToMatchString(entity.name).includes(searchQueryMatchString) ||
			)
			.map((entityGroup) => {
				const filteredEntities = entityGroup.entities?.filter(
					(entity) =>
						convertToMatchString(entity.name).includes(searchQueryMatchString) ||
						convertToMatchString(entity.symbol).includes(searchQueryMatchString) ||
						convertToMatchString(entity.entity).includes(searchQueryMatchString) ||
						convertToMatchString(entity.unicode).includes(searchQueryMatchString)
				);

				return { ...entityGroup, entities: filteredEntities };
			});
	}

	if (searchQuery.length > 0 && entities.length === 0)
		return (
			<div className="entities-list no-results">
				<h2 className="no-results-message">Sorry, no results for that search term.</h2>
			</div>
		);

	// const handleFilterByCategory = (categoryLabel: string) => {
	// 	entities = entities.find((group) => group.categoryLabel === categoryLabel).entities;
	// 	console.log("entities:", entities);
	// };

	return (
		<ul className="entities-list" lang="en">
			{entities.map((entityGroup: EntitityCategory) => (
				<React.Fragment key={entityGroup.categoryLabel}>
					<li className="entities-list__category">
						<h3 className="entities-list__category-label">{entityGroup.categoryLabel}</h3>
						<span
							className="entities-list__category-icon"
							// onClick={() => handleFilterByCategory(category.categoryLabel)}
						>
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
