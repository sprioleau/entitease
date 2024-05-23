import { OutlinedArrowIcon } from "@/components/Icon";
import LabelWithCopy from "@/components/LabelWithCopy";
import { Entity } from "@/types/types";
import Link from "next/link";

type Props = {
	entity: Entity;
};

export default function SymbolDetail({ entity }: Props) {
	return (
		<div className="symbol-detail">
			<div className="symbol-detail__symbol">
				<LabelWithCopy
					label={entity.symbol}
					tag={"h2"}
					className="symbol-detail__symbol-mark"
					textToCopy={entity.symbol}
					isBlank={entity.isBlank}
				/>
				<LabelWithCopy
					label={entity.name}
					tag={"h1"}
					className="symbol-detail__label"
					addClass="name"
				/>
			</div>
			<div className="symbol-detail__entity">
				<LabelWithCopy
					label={entity.entity}
					tag={"span"}
					className="symbol-detail__key"
					textToCopy={entity.entity}
					isBlank={entity.isBlank}
				/>
				<span className="symbol-detail__label">Entity</span>
			</div>
			<div className="symbol-detail__html">
				<div className="symbol-detail__html-reference">
					<LabelWithCopy
						label={entity.htmlCode}
						tag={"span"}
						className="symbol-detail__key"
						textToCopy={entity.htmlCode}
					/>
					<span className="symbol-detail__label">HTML Code</span>
				</div>
				<div className="symbol-detail__html-example">
					<code>
						<pre className="comment">{`<!-- HTML example -->`}</pre>
						<LabelWithCopy
							label={`<span> ${entity.htmlCode} </span>`}
							tag={"pre"}
							textToCopy={`<span> ${entity.htmlCode} </span>`}
						/>
					</code>
				</div>
			</div>
			<div className="symbol-detail__css">
				<div className="symbol-detail__css-reference">
					<LabelWithCopy
						label={entity.cssCode}
						tag={"span"}
						className="symbol-detail__key"
						textToCopy={entity.cssCode}
					/>
					<span className="symbol-detail__label">CSS Code</span>
				</div>
				<div className="symbol-detail__css-example">
					<code>
						<pre className="comment">{`/* CSS example */`}</pre>
						<LabelWithCopy
							label={`span { content: ${entity.cssCode} }`}
							tag={"pre"}
							textToCopy={`span { content: ${entity.cssCode} }`}
						/>
					</code>
				</div>
			</div>
			<div className="symbol-detail__unicode">
				<LabelWithCopy
					label={entity.unicode}
					tag={"span"}
					className="symbol-detail__key"
					textToCopy={entity.unicode}
				/>
				<span className="symbol-detail__label">Unicode</span>
			</div>
			<div className="symbol-detail__back">
				<Link href="/">
					<span className="symbol-detail__back-arrow">
						<OutlinedArrowIcon />
					</span>
				</Link>
			</div>
		</div>
	);
}
