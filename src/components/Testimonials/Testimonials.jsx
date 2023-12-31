import React from "react";
import "./testimonials.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

function Testimonials() {
	return (
		<section
			className="testimonial conteiner section"
			id="testimonial"
		>
			<h2 className="section__title">My clients say</h2>
			<span className="section__subtitle">Testimonials</span>
			<Swiper
				className="testimonial__conteiner"
				loop={true}
				spaceBetween={24}
				grabCursor={true}
				autoHeight={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination]}
			>
				{Data.map(({ id, image, title, description }) => {
					return (
						<SwiperSlide
							className="testimonial__card"
							key={id}
						>
							<img
								src={image}
								alt={`image${id}`}
								className="testimonial__img"
							/>
							<h3 className="testimonial__name">{title}</h3>
							<p className="testimonial__description">{description}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Testimonials;
