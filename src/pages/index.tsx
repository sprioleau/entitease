import Banner from "@/components/Banner";
import EntitiesList from "@/components/EntitiesList";
import Footer from "@/components/Footer";
import HeadContent from "@/components/HeadContent";
import Instructions from "@/components/Instructions";
import ModalTarget from "@/components/ModalTarget";
import Search from "@/components/Search";

export default function Home() {
	return (
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
	);
}
