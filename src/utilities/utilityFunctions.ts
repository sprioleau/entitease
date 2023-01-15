import { Entity } from "../types/types";

export const dashString = (string: string) => string.trim().toLowerCase().replace(/[-\s]/g, "-");

export const convertToMatchString = (string: string) => string.trim().toLowerCase().replace(/[-\s]/g, "");

export const filterEntityBySearchQuery = (entitiesList: any, searchQuery: string) =>
	entitiesList.filter(
		(entity: Entity) =>
			convertToMatchString(entity.name).includes(convertToMatchString(searchQuery)) ||
			convertToMatchString(entity.symbol).includes(convertToMatchString(searchQuery)) ||
			convertToMatchString(entity.entity).includes(convertToMatchString(searchQuery)) ||
			convertToMatchString(entity.unicode).includes(convertToMatchString(searchQuery))
	);

export const isInSearchQuery = (property: string, searchQuery: string): boolean => {
	return convertToMatchString(property).includes(convertToMatchString(searchQuery));
};

export const composeClasses = (classesObject: {}) => {
	const classList = Object.entries(classesObject);

	let newClassList: string[] = [];

	classList.forEach(([classString, condition]) => {
		const validString = typeof condition === "string" && condition === "";
		const validBoolean = typeof condition === "boolean" && condition === true;
		const classIsDefined = classString !== undefined;
		const validCondition = (validString || validBoolean) && classIsDefined;

		if (!validCondition) return;
		newClassList = newClassList.concat(classString);
	});

	return newClassList.join(" ");
};
