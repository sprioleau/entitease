import { EntityDisplayValueTypes } from "../types/types";

// prettier-ignore
const entityDisplayValues: EntityDisplayValueTypes = {
	symbol: { addClass: "symbol", tag: "h3", label: "", copy: true },
	name: { addClass: "name", tag: "h4", label: "", copy: false },
	entity: { addClass: "entity", tag: "p", label: "Entity: ", copy: true },
	htmlCode: { addClass: "htmlCode", tag: "p", label: "HTML: ", copy: true },
	cssCode: { addClass: "cssCode", tag: "p", label: "CSS: ", copy: true },
	unicode: { addClass: "unicode", tag: "p", label: "Unicode: ", copy: true },
};

export default entityDisplayValues;
