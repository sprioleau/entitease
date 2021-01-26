import entities from "../utilities/entities";
import LabelWithCopy from "../components/LabelWithCopy";
// import { GrFormNextLink } from "react-icons/gr";
import { dashString } from "../utilities/utilityFunctions";
import Icon from "./Icon";

// prettier-ignore
const entityDisplayValues = {
	symbol: { addClass: "symbol", tag: "h3", label: "", copy: true},
	name: { addClass: "name", tag: "h4", label: "", copy: false },
	entity: { addClass: "entity", tag: "p", label: "Entity: ", copy: true  },
	htmlCode: { addClass: "htmlCode", tag: "p", label: "HTML: ", copy: true },
	cssCode: { addClass: "cssCode", tag: "p", label: "CSS: ", copy: true },
	unicode: { addClass: "unicode", tag: "p", label: "Unicode: ", copy: true  },
};

const EntitiesList = () => {
	return (
		<ul className="entities-list">
			{entities.map((entity) => (
				<li key={`${entity.name}-${entity.htmlCode}`} className="entities-list__item">
					<div className="entities-list__positioner">
						<div className="entities-list__labels">
							{Object.keys(entityDisplayValues).map((key) => (
								<LabelWithCopy
									key={key}
									label={`${entityDisplayValues[key].label}${entity[key]}`}
									tag={entityDisplayValues[key].tag}
									className="entities-list__item-label"
									addClass={entityDisplayValues[key].addClass}
									textToCopy={entity[key]}
									copy={entityDisplayValues[key].copy}
									blank={entity.blank}
								/>
							))}
						</div>
						<div className="entities-list__navigation">
							<Icon
								link
								to={`/symbol/${dashString(entity.name)}`}
								addClass="arrow-icon"
								size="md"
								icon={<ArrowIcon />}
							/>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

const ArrowIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 215.27 215.27"
		width="100%"
		height="100%"
		className="icon arrow-icon"
	>
		<path d="M215.27,0V215.27H165.12V85.61L38,212.73,2.54,177.27,129.66,50.15H0V0Z" fill="#f5bf16" />
	</svg>
);

export default EntitiesList;
