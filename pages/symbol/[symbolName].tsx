import React from "react";
import entities from "../../utilities/entities";
import { useRouter } from "next/router";
import { dashString } from "../../utilities/utilityFunctions";

const Symbol = () => {
	const router = useRouter();
	const { symbolName } = router.query;

	const details = entities.find((entity) => dashString(entity.name) === symbolName);

	return <pre>{JSON.stringify(details, null, 2)}</pre>;
};

export default Symbol;
