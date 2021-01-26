import Head from "next/head";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../../state-provider/store";
import { useRouter } from "next/router";
import entities from "../../utilities/entities";
import { dashString } from "../../utilities/utilityFunctions";
import LabelWithCopy from "../../components/LabelWithCopy";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ModalTarget from "../../components/ModalTarget";

const Symbol = () => {
	const router = useRouter();
	const { symbolName } = router.query;

	const entity = entities.find((entity) => dashString(entity.name) === symbolName);

	return (
		<Provider store={store}>
			<Head>
				<title>{entity.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ModalTarget />

			<main className="main-content">
				<Banner />
				<Footer />
				<SymbolDetail entity={entity} />
			</main>
		</Provider>
	);
};

export default Symbol;

const SymbolDetail = ({ entity }) => {
	return (
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
				<LabelWithCopy
					label={entity.htmlCode}
					tag={"span"}
					className="symbol-detail__key"
					textToCopy={entity.htmlCode}
					copy={true}
				/>
				<span className="symbol-detail__label">HTML Code</span>
			</div>
			<div className="symbol-detail__css">
				<LabelWithCopy
					label={entity.cssCode}
					tag={"span"}
					className="symbol-detail__key"
					textToCopy={entity.cssCode}
					copy={true}
				/>
				<span className="symbol-detail__label">CSS Code</span>
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
						<svg className="symbol-detail__back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.25 310.86">
							<path
								d="M3.21,155.43,155.43,3.21l35.46,35.46L99.21,130.35H279V180.5H99.21l91.68,91.69-35.46,35.46Z"
								fill="none"
								stroke="#f5bf16"
								stroke-miterlimit="10"
								stroke-width="4.54"
							/>
						</svg>
					</a>
				</Link>
			</div>
		</div>
	);
};
