import { Provider } from "react-redux";
import store from "../state-provider/store";
import Head from "next/head";
import ModalTarget from "../components/ModalTarget";
import EntitiesList from "../components/EntitiesList";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<Provider store={store}>
			<Head>
				<title>Entitease | Find your symbols with ease</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ModalTarget />
			<main className="main-content">
				<Banner />
				<Footer />
				<EntitiesList />
			</main>
		</Provider>
	);
};

export default Home;
