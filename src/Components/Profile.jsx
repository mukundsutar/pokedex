import React, { useEffect, useState } from "react";

export default function Profile({pokemonID}) {
	const [apiData, setAPIData] = useState(1);

	
	useEffect(() => {
		async function fetchAPI() {

			const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
			const data = await url.json();

			setAPIData(data);
		}

		fetchAPI();
	});

	return (
		<>
			{apiData && (
				<div id="pokemon-info">
					<div className="overview">
						<div id="stats">
							<div id="statName">{apiData.name}</div>
							<br />
							<div id="height">HT {apiData.height * 10}cm</div>
							<div id="weight">WT {apiData.weight / 10}kg</div>
						</div>
						<img
							id="pokemon-img"
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
							alt=""
						/>
					</div>
					<div id="pokemon-types">
						<span className="type-box grass">GRASS</span>
						<span className="type-box poison">POISON</span>
					</div>
					<div id="pokemon-description">
						There is a plant seed on its back right from the day
						this POKéMON is born. The seed slowly grows larger.
					</div>
				</div>
			)}
		</>
	);
}
