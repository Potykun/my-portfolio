import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"
import Work6 from "../../assets/work6.jpg"
import Work7 from "../../assets/process.svg"
import Work8 from "../../assets/work8.jpg"
import Work9 from "../../assets/work9.jpg"

export const projectsData = [
	{
		id: 9,
		image: Work9,
		title: "E-commerce Pizza app",
		category: "React",
		src: "https://potykun.github.io/pizza-ecommerce/",
		feathers: ["Lodash.debounce"],
		technologies: ["React.js", "Redux Toolkit", "TypeScript", "SCSS module", "JavaScript"],
	},
	{
		id: 8,
		image: Work8,
		title: "Multi pages web application",
		category: "JavaScript",
		src: "https://potykun.github.io/Portfolio_skold/",
	},
	{
		id: 3,
		image: Work3,
		title: "FarmVest",
		category: "JavaScript",
		src: "https://potykun.github.io/Portfolio_Agroinvest/",
	},
	{
		id: 2,
		image: Work2,
		title: "Locus",
		category: "JavaScript",
		src: "https://potykun.github.io/Portfolio_Locus/",
	},

	{
		id: 5,
		image: Work5,
		title: "Portfolio site",
		category: "JavaScript",
		src: "https://potykun.github.io/Portfolio_Alex/",
	},
	{
		id: 4,
		image: Work4,
		title: "MUJO",
		category: "JavaScript",
		src: "#",
	},
	{
		id: 1,
		image: Work1,
		title: "Web design",
		category: "JavaScript",
		src: "#",
	},

	{
		id: 6,
		image: Work6,
		title: "Web design",
		category: "React",
		src: "#",
	},
	{
		id: 7,
		image: Work7,
		title: "In procces",
		category: "Other",
		svg: `
		<svg fill="#000000" width="200px" height="200px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
		<path d="M23,11a1,1,0,0,0-1,1,10.034,10.034,0,1,1-2.9-7.021A.862.862,0,0,1,19,5H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V1a1,1,0,0,0-2,0V3.065A11.994,11.994,0,1,0,24,12,1,1,0,0,0,23,11Z
		M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"/></svg>`,
		src: "#",
	},
]

export const projectsNav = [
	{
		name: "All",
	},
	{
		name: "React",
	},
	{
		name: "JavaScript",
	},
	{
		name: "Other",
	},
]
