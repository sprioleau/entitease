import Head from "next/head";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../../state-provider/store";
import { useRouter } from "next/router";
import entities from "../../../.references/archive/entities";
import { dashString } from "../../utilities/utilityFunctions";
import LabelWithCopy from "../../components/LabelWithCopy";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ModalTarget from "../../components/ModalTarget";
// import { Entity } from "../../types/types";
import { OutlinedArrowIcon } from "../../components/Icon";
import Instructions from "../../components/Instructions";

const Symbol = () => {
	const router = useRouter();
	const { symbolName } = router.query;

	if (!symbolName) return null; // useRouter hook returns undefined on first render.

	const entity: any = entities.find((entity) => dashString(entity.name) === symbolName);

	return (
		<Provider store={store}>
			<div className="app">
				<Head>
					<title>{entity.name}</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<ModalTarget />

				<main className="main-content no-search">
					<Banner />
					<Instructions />
					<Footer />
					<SymbolDetail entity={entity} />
				</main>
			</div>
		</Provider>
	);
};

export default Symbol;

const SymbolDetail = ({ entity }: any) => (
	<div className="symbol-detail">
		<div className="symbol-detail__symbol">
			<LabelWithCopy
				label={entity.symbol}
				tag={"h2"}
				className="symbol-detail__symbol-mark"
				textToCopy={entity.symbol}
				copy={true}
				blank={entity.blank}
			/>
			<LabelWithCopy
				label={entity.name}
				tag={"h1"}
				className="symbol-detail__label"
				addClass="name"
				textToCopy={entity.name}
				copy={false}
			/>
		</div>
		<div className="symbol-detail__entity">
			<LabelWithCopy
				label={entity.entity}
				tag={"span"}
				className="symbol-detail__key"
				textToCopy={entity.entity}
				copy={true}
				blank={entity.blank}
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
					copy={true}
				/>
				<span className="symbol-detail__label">HTML Code</span>
			</div>
			<div className="symbol-detail__html-example">
				<code>
					<pre className="comment">{`<!-- HTML example -->`}</pre>
					<LabelWithCopy
						label={`<span> ${entity.htmlCode} </span>`}
						tag={"pre"}
						className={null}
						textToCopy={`<span> ${entity.htmlCode} </span>`}
						copy={true}
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
					copy={true}
				/>
				<span className="symbol-detail__label">CSS Code</span>
			</div>
			<div className="symbol-detail__css-example">
				<code>
					<pre className="comment">{`/* CSS example */`}</pre>
					<LabelWithCopy
						label={`span { content: ${entity.cssCode} }`}
						tag={"pre"}
						className={null}
						textToCopy={`span { content: ${entity.cssCode} }`}
						copy={true}
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
				copy={true}
			/>
			<span className="symbol-detail__label">Unicode</span>
		</div>
		<div className="symbol-detail__back">
			<Link href="/">
				<a>
					<span className="symbol-detail__back-arrow">
						<OutlinedArrowIcon />
					</span>
				</a>
			</Link>
		</div>
	</div>
);
