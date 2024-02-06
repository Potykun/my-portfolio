import React from "react"
import "./footer.css"

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Potykun</h1>
				<ul className="footer__list">
					<li>
						<a
							href="#about"
							className="footer__link"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							className="footer__link"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#testimonial"
							className="footer__link"
						>
							Testimonials
						</a>
					</li>
				</ul>
				<div className="footer__social">
					<a
						href="https://www.instagram.com/a_potykun/"
						className="footer__social-link"
						target="_blank"
					>
						<i className="uil uil-instagram"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/andrii-potykun-bb25a4239/"
						className="footer__social-link"
						target="_blank"
					>
						<i className="uil uil-linkedin"></i>
					</a>
					<a
						href="https://github.com/Potykun/"
						className="footer__social-link"
						target="_blank"
					>
						<i className="uil uil-github-alt"></i>
					</a>
				</div>
				<span className="footer__copy">&#169; Potykun. All right reserved</span>
			</div>
		</footer>
	)
}

export default Footer
