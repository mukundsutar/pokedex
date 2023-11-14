import React from "react";
import Item from "./Item";

export default function List() {

	let pokemonCount = 151;

	const listItems = Array.from({ length: pokemonCount }, (_, index) => (
		<Item key={index} pokemonID={index + 1} />
	));

	return (
		<>
			<div id="pokemon-list">{listItems}</div>
		</>
	);
}
