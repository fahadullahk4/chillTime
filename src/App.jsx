import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

const App = () => {
	const [searchBar, setSearchBar] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const fetchMovies = async () => {
		try {
		} catch (error) {
			console.error(`Error fetching movies: ${error}`);
			setErrorMessage(`Error fetching movies, please try again later.`);
		}
	};

	useEffect(() => {}, []);
	return (
		<main>
			<div className="pattern" />
			<div className="wrapper">
				<header>
					{/* <img className="size-min" src="./logo.svg" alt="logo" /> */}
					<img src="./hero-img.png" alt="Banner Image" />
					<h1>
						In a mood for a <span className="text-gradient">Movie</span> ? You
						are at the right place.
					</h1>
					<Search searchBar={searchBar} setSearchBar={setSearchBar} />
				</header>

				<section className="all-movies">
					<h2>All Movies</h2>

					{errorMessage && <p className="text-red-500">{errorMessage}</p>}
				</section>
			</div>
		</main>
	);
};

export default App;
