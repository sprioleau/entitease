export type Entity = {
	symbol: string;
	entity: string;
	htmlCode: string;
	cssCode: string;
	unicode: string;
	name: string;
	isBlank?: boolean;
};

export type EntitityCategory = {
	categoryLabel: string;
	entities: Entity[];
};
