import React from "react";
import "./Details.css";

const Details = (props) => {
	const {
		name,
		capital,
		flag,
		population,
		area,
		languages,
	} = props.detailsCountry;
	// console.log(languages);

	// const Alllanguages = languages && languages;

	return (
		<div>
			<div className="DetailsPart">
				<div className="detailsImage">
					<img src={flag} alt="" />
				</div>
				<div className="detailsInfo">
					<div className="infoText">
						<h2>Name:</h2>
						<h3>{name}</h3>
					</div>
					<div className="infoText">
						<h2>Capital:</h2>
						<h3>{capital}</h3>
					</div>
					<div className="infoText">
						<h2>Population:</h2>
						<h3>{population}</h3>
					</div>
					<div className="infoText">
						<h2>Area:</h2>
						<h3>{area}km²</h3>
					</div>
					<div className="infoText">
						{/* <h2>Language:</h2>
						<ul>
                           
                            {
                                 for (let i = 0; i < Alllanguages.length; i++) {
                                    const element = Alllanguages[i];
                                    
                                }
                               }
                             
						</ul> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
