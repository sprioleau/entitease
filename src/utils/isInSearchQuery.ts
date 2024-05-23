import convertToMatchString from "./convertToMatchString";

export default function isInSearchQuery(property: string, searchQuery: string) {
	return convertToMatchString(property).includes(convertToMatchString(searchQuery));
}
