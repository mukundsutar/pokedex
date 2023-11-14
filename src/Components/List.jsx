import React, { useState } from "react";
import Item from "./Item";

export default function List() {

	let pokemonCount = 151;

	const listItems = Array.from({ length: pokemonCount }, (_, index) => (
		<Item key={index} id={index + 1} />
	));

	return (
		<>
			<div id="pokemon-list">{listItems}</div>
		</>
	);
}
