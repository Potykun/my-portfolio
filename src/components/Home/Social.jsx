import React from "react";

function Social() {
	return (
		<div className="home__social">
			<a
				href="https://www.instagram.com/a_potykun/"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-instagram"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/andrii-potykun-bb25a4239/"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-linkedin"></i>
			</a>
			<a
				href="https://github.com/Potykun/"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-github-alt"></i>
			</a>
		</div>
	);
}

export default Social;
