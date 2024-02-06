import React from "react"

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
			<h2 className="work__title">{item.title}</h2>
			<div className="work__stack">
				<h4>Stack:</h4>
				{item.technologies ? (
					<div className="work__stack-items">
						{item.technologies.map((e, i) => (
							<div
								key={i}
								className="work__stack-item"
							>
								<i className="bx bx-badge-check"></i>
								<p>{e}</p>
							</div>
						))}
					</div>
				) : (
					"JavaScript"
				)}
			</div>
			{item.feathers && (
				<div className="work__feathers">
					<h3>Feathers:</h3>
					<div className="work__feathers-items">
						{item.feathers.map((e, i) => (
							<div className="work__feathers-item">{e}</div>
						))}
					</div>
				</div>
			)}
			<a
				href={item.src}
				className="work__button"
			>
				Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
			</a>
		</div>
	)
}

export default WorkItems
