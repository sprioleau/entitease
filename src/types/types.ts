export interface Entity {
	symbol: string;
	entity: string;
	htmlCode: string;
	cssCode: string;
	unicode: string;
	name: string;
	blank?: boolean;
	[key: string]: string | boolean | undefined;
}

export interface EntitityCategory {
	categoryLabel: string;
	entities: Entity[];
}

export interface EntityDisplayValueTypes {
	[key: string]: {
		addClass: string;
		tag: string;
		label: string;
		copy: boolean;
	};
}
