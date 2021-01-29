export const dashString = (string: string) => string.trim().toLowerCase().replace(/[-\s]/g, "-");

export const convertToMatchString = (string: string) => string.trim().toLowerCase().replace(/[-\s]/g, "");

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
