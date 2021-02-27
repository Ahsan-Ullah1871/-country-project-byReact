import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import Details from "./components/Details/Details";

function App() {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState([]);

	const [detailsCountry, setDetailsCountry] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then((response) => response.json())
			.then((data) => setCountries(data));
	}, []);

	// Country selected:
	const addHandler = (country) => {
		const newAdd = [...selectedCountry, country];
		setSelectedCountry(newAdd);
		console.log(selectedCountry.length);
	};

	// Details:
	const detailsHandler = (country) => {
		const newDetails = country;
		setDetailsCountry(newDetails);
	};

	return (
		<div>
			<Header selectedCountry={selectedCountry}></Header>

			<div className="CountryAndDetails">
				<div className="countriesPart">
					{countries.map((country) => (
						<Country
							country={country}
							addHandler={addHandler}
							detailsHandler={detailsHandler}
						></Country>
					))}
				</div>
				<Details
					className="DetailsPart"
					detailsCountry={detailsCountry}
				></Details>
			</div>
		</div>
	);
}

export default App;
