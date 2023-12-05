import React from "react";

// function WorkItems(props) {
function WorkItems({ item }) {
	return (
		<div className="work__card">
			<img
				src={item.image}
				alt="image"
				className="work__image"
			/>
			<h3 className="work__title">{item.title}</h3>
			<a
				href=""
				className="work__button"
			>
				Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
			</a>
		</div>
	);
}

export default WorkItems;
