import React from "react";
import { Link } from "react-router-dom";

const pathDataBase = [
	{ baseURL : "about" , nameURL : "ABOUT ME" },
	{ baseURL : "projects" , nameURL : "PROJECTS" },
	{ baseURL : "coding" , nameURL : "PR. LANGUAGES / TOOLS" }
];

function MenuLeft() {
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

export default MenuLeft;