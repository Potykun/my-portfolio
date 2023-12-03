import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<>
			<Header></Header>
			<main className="main">
				<Home></Home>
				<About></About>
				<Skills></Skills>
				<Services></Services>
			</main>
		</>
	);
}

export default App;
