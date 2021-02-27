import React from "react";
import "./Country.css";

const Country = (props) => {
	const { name, capital, flag } = props.country;
	return (
		<div>
			<div className="countrySection">
				<div className="image">
					<img src={flag} alt="" />
				</div>
				<div className="info">
					<h2>Name:{name}</h2>
					<h3>Capital:{capital}</h3>
					<button
						onClick={() =>
							props.addHandler(props.country)
						}
					>
						Add in your favorite
					</button>
					<button
						onClick={() =>
							props.detailsHandler(
								props.country
							)
						}
					>
						Show Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Country;
