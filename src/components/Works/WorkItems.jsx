import React from "react";

// function WorkItems(props) {
function WorkItems({ item }) {
	return (
		<div className="work__card">
			<a href={item.src}>
				{!item.svg ? (
					<img
						src={item.image}
						alt="image"
						className="work__image"
					/>
				) : (
					<div
						dangerouslySetInnerHTML={{ __html: item.svg }}
						className="work__image work__image--svg"
					/>
				)}
			</a>
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
