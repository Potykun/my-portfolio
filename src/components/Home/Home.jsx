import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";

function Home() {
	return (
		<div>
			<section
				className="home section"
				id="home"
			>
				<div className="home__conteiner conteiner grid">
					<div className="home__content grid">
						<Social></Social>
						<div className="home__img"></div>
						<Data></Data>
					</div>
					<ScrollDown></ScrollDown>
				</div>
			</section>
		</div>
	);
}

export default Home;
