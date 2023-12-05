import React from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { useEffect, useState } from "react";

function WorkList() {
	const [item, setItem] = useState({ name: "all" });
	const [projcts, setProjcts] = useState([]);
	const [actiive, setActive] = useState(0);

	useEffect(() => {
		if (item.name === "all") {
			setProjcts(projectsData);
		} else {
			const newProjects = projectsData.filter((project) => {
				return project.category.toLowerCase() === item.name;
			});
			setProjcts(newProjects);
		}
	}, [item]);
	const handleClick = (e, index) => {
		setItem({ name: e.target.textContent.toLowerCase() });
		setActive(index);
	};
	return (
		<>
			<div className="work__filter">
				{projectsNav.map((item, index) => {
					return (
						<span
							className={
								actiive === index
									? "active-work work__item"
									: "work__item"
							}
							key={index}
							onClick={(e) => {
								handleClick(e, index);
							}}
						>
							{item.name}
						</span>
					);
				})}
			</div>
			<div className="work__conteiner conteiner grid">
				{projcts.map((item) => {
					return (
						<WorkItems
							item={item}
							key={item.id}
						></WorkItems>
					);
				})}
			</div>
		</>
	);
}

export default WorkList;
