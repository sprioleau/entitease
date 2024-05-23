import { Entity } from "@/types/types";
import convertToMatchString from "./convertToMatchString";

export default function filterEntityBySearchQuery({
	entitiesList,
	searchQuery,
}: {
	entitiesList: Entity[];
	searchQuery: string;
}) {
	return entitiesList.filter(
		(entity: Entity) =>
			convertToMatchString(entity.name).includes(convertToMatchString(searchQuery)) ||
			convertToMatchString(entity.symbol).includes(convertToMatchString(searchQuery)) ||
			convertToMatchString(entity.entity).includes(convertToMatchString(searchQuery)) ||
			convertToMatchString(entity.unicode).includes(convertToMatchString(searchQuery))
	);
}
