import Banner from "@/components/Banner";
import EntitiesList from "@/components/EntitiesList";
import Footer from "@/components/Footer";
import Instructions from "@/components/Instructions";
import Search from "@/components/Search";
import { ToastProvider } from "@/hooks/useToast";

export default async function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		category?: string;
	};
}) {
	return (
		<main className="main-content">
			<Banner />
			<Search />
			<Instructions />
			<Footer />
			<ToastProvider>
				<EntitiesList
					query={searchParams?.query ?? ""}
					category={searchParams?.category ?? ""}
				/>
			</ToastProvider>
		</main>
	);
}
