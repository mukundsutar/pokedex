import React, { useEffect, useState } from "react";
import { useIDStore } from "../store/storage";

export default function Item({ pokemonID }) {
	const [apiData, setAPIData] = useState();
	const [prefix, setPrefix] = useState("");
	const setID = useIDStore((state) => state.setID);

	useEffect(() => {
		async function fetchAPI() {
			const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
			const data = await url.json();

			setAPIData(data);
		}

		async function checkID() {
			if (pokemonID <= 9) {
				setPrefix(`No00${pokemonID} `);
			} else if (pokemonID <= 99) {
				setPrefix(`No0${pokemonID} `);
			} else {
				setPrefix(`No${pokemonID} `);
			}
		}

		if (pokemonID !== undefined) {
			checkID();
			fetchAPI();
		}
	}, [pokemonID]);

	const handleSetId = () => {
		setID(pokemonID);
	  };

	return (
		<>
			{apiData && (
				<div
					className="pokemon-name"
					id={apiData.name + "-" + apiData.id}
					onClick={handleSetId}
				>
					{prefix && prefix + apiData.name.toUpperCase()}
				</div>
			)}
		</>
	);
}
