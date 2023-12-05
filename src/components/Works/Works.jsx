import React from "react";
import "./works.css";

import WorkList from "./WorkList";

function Works() {
	return (
		<section
			className="work section"
			id="portfolio"
		>
			<h2 className="section__title">Portfolio</h2>
			<span className="section__subtitle">Most recent works</span>
			<WorkList></WorkList>
		</section>
	);
}

export default Works;
