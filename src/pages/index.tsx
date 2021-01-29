import { Provider } from "react-redux";
import store from "../state-provider/store";
import ModalTarget from "../components/ModalTarget";
import EntitiesList from "../components/EntitiesList";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";
import HeadContent from "../components/HeadContent";

const Home = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<HeadContent />

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
