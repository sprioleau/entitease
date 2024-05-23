export default function convertToMatchString(string: string) {
	return string.trim().toLowerCase().replace(/[-\s]/g, "");
}
