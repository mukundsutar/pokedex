import React, { useEffect, useState } from "react";
import { useIDStore } from "../store/storage";

export default function Profile() {
	const [apiData, setAPIData] = useState("");
	const [species, setSpeciesData] = useState("");

	const currID = useIDStore((state) => state.currID);

	useEffect(() => {
		async function fetchAPI() {
			const url = await fetch(
				"https://pokeapi.co/api/v2/pokemon/" + currID + "/"
			);
			const data = await url.json();

			setAPIData(data);
		}

		async function fetchAPIMore() {
			const url = await fetch(
				"https://pokeapi.co/api/v2/pokemon-species/" + currID + "/"
			);
			const data = await url.json();

			setSpeciesData(data);
		}

		fetchAPI();
		fetchAPIMore();
		console.log(currID);
	}, [currID]);

	console.log(apiData.types);

	return (
		<>
			{apiData && species && (
				<div id="pokemon-info">
					<div className="overview">
						<div id="stats">
							<div id="statName">{apiData.name}</div>

							<br />

							<div id="height">HT {apiData.height / 10}m</div>
							<div id="weight">WT {apiData.weight / 10}kg</div>
						</div>

						<img
							id="pokemon-img"
							src={apiData.sprites.front_default}
							alt=""
						/>
					</div>

					<div id="pokemon-types">
						{apiData.types.map((item, index) => (
							<span
								className={"type-box " + item.type.name}
								key={index}
							>
								{item.type.name}
							</span>
						))}
					</div>

					<div id="pokemon-description">
						{species["flavor_text_entries"][9]["flavor_text"]}
					</div>
				</div>
			)}
		</>
	);
}
