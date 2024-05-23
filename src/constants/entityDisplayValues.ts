// prettier-ignore
const entityDisplayValues = {
	symbol  : { addClass: "symbol"  , tag: "h3", label: ""          },
	name    : { addClass: "name"    , tag: "h4", label: ""          },
	entity  : { addClass: "entity"  , tag: "p" , label: "Entity: "  },
	htmlCode: { addClass: "htmlCode", tag: "p" , label: "HTML: "    },
	cssCode : { addClass: "cssCode" , tag: "p" , label: "CSS: "     },
	unicode : { addClass: "unicode" , tag: "p" , label: "Unicode: " },
} as const;

export default entityDisplayValues;
