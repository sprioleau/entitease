import { Provider } from "react-redux";
import store from "../state-provider/store";
import Head from "next/head";
import ModalTarget from "../components/ModalTarget";
import EntitiesList from "../components/EntitiesList";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";

const Home = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<Head>
					<title>Entitease | Find your symbols with ease</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<ModalTarget />
				<main className="main-content">
					<Banner />
					<Search />
					<Instructions />
					<Footer />
					<EntitiesList />
				</main>
			</div>
		</Provider>
	);
};

export default Home;
