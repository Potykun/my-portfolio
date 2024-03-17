import "./App.scss"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Qualification from "./components/Qualification/Qualification"
import ScrollUp from "./components/ScrollUp/ScrollUp"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"
import Testimonials from "./components/Testimonials/Testimonials"
import Works from "./components/Works/Works"

function App() {
	return (
		<>
			<Header></Header>
			<main className="main">
				<Home></Home>
				<Works></Works>
				<Skills></Skills>
				<Qualification></Qualification>
				<About></About>
				<Services></Services>
				<Testimonials></Testimonials>
				<Contacts></Contacts>
			</main>
			<Footer></Footer>
			<ScrollUp></ScrollUp>
		</>
	)
}

export default App
