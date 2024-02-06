import React, { useState } from "react"
import "./services.css"

function Services() {
	const [toggleState, setToggleState] = useState(0)
	const toggleTab = (index) => {
		setToggleState(index)
	}
	return (
		<section
			className="services section"
			id="services"
		>
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What i offer</span>
			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">Development Landing Page</h3>
					</div>
					<span
						onClick={() => toggleTab(1)}
						className="services__button"
					>
						View more
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">Development Landing Page</h3>
							<p className="services__modal-description">
								I bring a meticulous approach to understanding each client's unique vision, translating it into a visually stunning and
								responsive design.
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">User Flow Implementation</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Responsive and Cross-Browser <br /> Compatibility
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Performance Optimization</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Clear Call-to-Action</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Accessibility Standards</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">React development</h3>
					</div>
					<span
						onClick={() => toggleTab(2)}
						className="services__button"
					>
						View more
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">React developer</h3>
							<p className="services__modal-description">
								As a React developer, I specialize in crafting dynamic and responsive user interfaces to enhance the overall user
								experience. With a passion for clean and efficient code, I bring innovative solutions to the forefront, ensuring seamless
								navigation and optimal performance for web applications.
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">building interactive and scalable front-end solutions</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">creating component-based architectures</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">state management using Redux and context API</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">RESTful APIs for integration back-end services</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Design and mockups of products for companies.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="services__content">
					<div>
						<i className="uil uil-edit services__icon"></i>
						<h3 className="services__title">Multi page application</h3>
					</div>
					<span
						onClick={() => toggleTab(3)}
						className="services__button"
					>
						View more
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">Multi page application</h3>
							<p className="services__modal-description">
								Multi-Page Application (MPA) developer, I specialize in creating robust and user-friendly web experiences through the
								integration of JavaScript, CSS, and HTML. My focus is on building seamlessly navigable websites with an emphasis on clean
								code and engaging design.
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">creating responsive and visually appealing web pages</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Implementation of efficient JavaScript functionalities</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Implementing performance optimization</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Crafting engaging user interfaces</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
