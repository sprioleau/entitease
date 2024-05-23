import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Instructions from "@/components/Instructions";
import { entitiesList } from "@/constants/entitiesList";
import dashString from "@/utils/dashString";
import { redirect } from "next/navigation";
import SymbolDetail from "./(components)/SymbolDetail";

export default async function SymbolNamePage({ params }: { params: { symbolName: string } }) {
	const { symbolName } = params;

	if (!symbolName) return redirect("/");

	const entity: any = entitiesList
		.flatMap(({ entities }) => entities)
		.find((entity) => dashString(entity.name) === symbolName);

	return (
		<main className="main-content no-search">
			<Banner />
			<Instructions />
			<Footer />
			<SymbolDetail entity={entity} />
		</main>
	);
}
