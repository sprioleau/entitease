import Head from "next/head";
import entities from "../utilities/entities";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Entitease | Find your symbols with ease</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Entitease</h1>
				<ul className="entities-list">
					{entities.map(({ symbol, entity, htmlCode, cssCode, unicode, name }) => (
						<li key={`${name}-${htmlCode}`} className="entities-list__item">
							<h3>{symbol} </h3>
							<h4>Name: {name} </h4>
							<p>Entity: {entity}</p>
							<p>HTML Code: {htmlCode}</p>
							<p>CSS Code: {cssCode}</p>
							<p>{unicode}</p>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default Home;
