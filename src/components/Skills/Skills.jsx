import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";

function Skills() {
	return (
		<section
			className="skills section"
			id="skills"
		>
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My technical level</span>
			<div className="skills__conteiner conteiner grid">
				<Frontend></Frontend>
				<Backend></Backend>
			</div>
		</section>
	);
}

export default Skills;
