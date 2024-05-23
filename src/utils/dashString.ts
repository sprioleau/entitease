export default function dashString(string: string) {
	return string.trim().toLowerCase().replace(/[-\s]/g, "-");
}
