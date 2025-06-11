import React from "react";

function Search({ searchBar, setSearchBar }) {
	return (
		<div className="search">
			<div>
                <img src="./search.svg" alt="Search Icon" />
				<input
					type="text"
					placeholder="Search through movies..."
					value={searchBar}
					onChange={(e) => setSearchBar(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default Search;
