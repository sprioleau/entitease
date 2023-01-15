import { Provider } from "react-redux";
import Banner from "@/components/Banner";
import EntitiesList from "@/components/EntitiesList";
import Footer from "@/components/Footer";
import HeadContent from "@/components/HeadContent";
import Instructions from "@/components/Instructions";
import ModalTarget from "@/components/ModalTarget";
import Search from "@/components/Search";
import store from "@/state-provider/store";

export default function Home() {
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
}
