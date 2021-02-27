import React from "react";
import "./Header.css";

const Header = (props) => {
	return (
		<>
			<div className="headerSection">
				<div className="logo">Country</div>
				<div className="nav">
					<a href="/country">Country</a>
					<a href="/favorite">Selected Country</a>
				</div>
			</div>

			<div className="box">
				<h4>
					Your favorite Countries:{" "}
					{props.selectedCountry.length}{" "}
				</h4>
			</div>
		</>
	);
};

export default Header;
