import { useSwapi } from "react-swapi";

function StarWarsCharacter() {
	const { data, isLoading, error } = useSwapi("people", { name: "skywalker" });

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return <div>{/* Render your data here */}</div>;
}