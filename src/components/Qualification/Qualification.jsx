import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>
			<div className="qualification__conteiner conteiner">
				<div className="qualification__tabs">
					<div
						className={
							toggleState == 1
								? "qualification__button button--flex qualification__active"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
					<div
						className={
							toggleState == 2
								? "qualification__button button--flex qualification__active"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Wed design</h3>
								<span className="qualification__subtitle">
									Spain - Institute
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2021-Present</i>
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
								<h3 className="qualification__title">Art director</h3>
								<span className="qualification__subtitle">
									Spain - Institute
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2020-2021</i>
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Wed development
								</h3>
								<span className="qualification__subtitle">
									Spain - Institute
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2018-2020</i>
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
								<h3 className="qualification__title">Ux Expert</h3>
								<span className="qualification__subtitle">
									Spain - Institute
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2017-2018</i>
								</div>
							</div>
						</div>
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Product designer
								</h3>
								<span className="qualification__subtitle">
									Microsoft - Spain
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2021-Present</i>
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
								<h3 className="qualification__title">UX Designer</h3>
								<span className="qualification__subtitle">
									Apple Inc - Spain
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2020-2021</i>
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Wed designer</h3>
								<span className="qualification__subtitle">
									Figma - Spain
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt">2018-2020</i>
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Qualification;
