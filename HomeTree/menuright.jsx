import React from "react";
import { Link } from "react-router-dom";

function MenuRight() {

	const pathDataBase = [
		{ baseURL : "playground" , nameURL : "LET'S PLAY" },
		{ baseURL : "contact" , nameURL : "CONTACT" },
		{ baseURL : "work" , nameURL : "WORK WITH ME" }
	];

  return (
	<ul>
		{
			pathDataBase.map( ( detailURL ) => (
				<li><Link to={detailURL.baseURL}>{detailURL.nameURL}</Link></li>
			))
		}
	</ul>
  );
}

export default MenuRight;