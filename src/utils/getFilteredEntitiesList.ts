import { entitiesList } from "@/constants/entitiesList";
import { EntitityCategory } from "@/types/types";
import isInSearchQuery from "./isInSearchQuery";
import filterEntityBySearchQuery from "./filterEntityBySearchQuery";
import convertToMatchString from "./convertToMatchString";

export default function getFilteredEntitiesList({ query, category }: { query: string; category: string }) {
	let fileteredEntities: EntitityCategory[] = [];
	const searchQueryMatchString = convertToMatchString(query);

	if (query.length === 0 && category.length === 0) {
		fileteredEntities = entitiesList;
	} else if (query.length === 0 && category) {
		fileteredEntities = entitiesList.filter((entityGroup) => entityGroup.categoryLabel === category);
	} else if (query.length > 0 && category) {
		const filteredEntitiesGroup = entitiesList.filter((entityGroup) => entityGroup.categoryLabel === category);

		const filteredEntitiesBySearchQuery = filteredEntitiesGroup.map((entityGroup) => ({
			categoryLabel: entityGroup.categoryLabel,
			entities: filterEntityBySearchQuery({ entitiesList: entityGroup.entities, searchQuery: query }),
		}));

		fileteredEntities = filteredEntitiesBySearchQuery;
	} else {
		fileteredEntities = entitiesList
			.filter((entityGroup) =>
				entityGroup.entities.some(
					(entity) =>
						isInSearchQuery(entityGroup.categoryLabel, query) ||
						isInSearchQuery(entity.name, query) ||
						isInSearchQuery(entity.symbol, query) ||
						isInSearchQuery(entity.entity, query) ||
						isInSearchQuery(entity.unicode, query)
				)
			)
			.map((entityGroup) => {
				const filteredEntities = filterEntityBySearchQuery({ entitiesList: entityGroup.entities, searchQuery: query });

				if (convertToMatchString(entityGroup.categoryLabel).includes(searchQueryMatchString)) {
					return { ...entityGroup, entities: filteredEntities.concat(entityGroup.entities) };
				}

				return { ...entityGroup, entities: filteredEntities };
			});
	}

	return fileteredEntities;
}
