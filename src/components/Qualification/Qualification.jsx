import React, { useState } from "react"
import "./qualification.css"

function Qualification() {
	const [toggleState, setToggleState] = useState(1)
	const toggleTab = (index) => {
		setToggleState(index)
	}
	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>
			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
					<div
						className={
							toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
						<div className="qualification__data qualification__data--left">
							<div>
								<h3 className="qualification__title">Web Development React.js</h3>
								<span className="qualification__subtitle">
									ReDI School of Digital Integration. <br /> Dusseldorf - Germany
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">09.2023 - 12.2023</i>
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data ">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Web Development JavaScript</h3>
								<span className="qualification__subtitle">
									ReDI School of Digital Integration. <br /> Dusseldorf - Germany
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">04.2023 - 06.2023</i>
								</div>
							</div>
						</div>
						<div className="qualification__data qualification__data--left">
							<div>
								<h3 className="qualification__title">German B2 language courses</h3>
								<span className="qualification__subtitle">
									Berlitz Language School
									<br /> Duisburg - Germany
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">10.2023 - 06.2024</i>
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">German B1 language courses</h3>
								<span className="qualification__subtitle">
									L.A.N.E.S Language School
									<br /> Duisburg - Germany
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">09.2022 - 04.2023</i>
								</div>
							</div>
						</div>
						<div className="qualification__data qualification__data--left">
							<div>
								<h3 className="qualification__title">Bachelor of Architecture</h3>
								<span className="qualification__subtitle">
									Kharkiv National University <br /> of Construction and Architecture
									<br /> Kharkiv - Ukraine
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">09.2013 - 06.2017</i>
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">High school diploma</h3>
								<span className="qualification__subtitle">
									Kharkiv University Lyceum
									<br /> Kharkiv - Ukraine
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">09.2001 - 06.2012</i>
								</div>
							</div>
						</div>
					</div>
					<div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
						<div className="qualification__data qualification__data--left">
							<div>
								<h3 className="qualification__title">Frontend developer</h3>
								<span className="qualification__subtitle">Q-Web - Kharkiv, Ukraine</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">06/2021 - 02/2022</i>
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Senior Interio Designer</h3>
								<span className="qualification__subtitle">Progressive Design - Kharkiv, Ukraine</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">09/2017 - 06/2021</i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification
