import React, { useEffect, useState } from "react";

export default function Item({ id }) {
	const [apiData, setAPIData] = useState();
	const [prefix, setPrefix] = useState("");

	useEffect(() => {
		async function fetchAPI() {
			const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
			const data = await url.json();

			setAPIData(data);
		}

		async function checkID() {
			if (id <= 9) {
				setPrefix(`No00${id} `);
			} else if (id <= 99) {
				setPrefix(`No0${id} `);
			} else {
				setPrefix(`No${id} `);
			}
		}

		checkID();
		fetchAPI();
	}, [id]);

	return (
		<>
			{apiData && (
				<div
					className="pokemon-name"
					id={apiData.name + "-" + apiData.id}
				>
					{prefix && prefix + apiData.name.toUpperCase()}
				</div>
			)}
		</>
	);
}
