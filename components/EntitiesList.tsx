import entities from "../utilities/entities";
import LabelWithCopy from "../components/LabelWithCopy";
import { GrFormNextLink } from "react-icons/gr";
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
								icon={<GrFormNextLink />}
							/>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default EntitiesList;
