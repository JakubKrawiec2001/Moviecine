"use client";

import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ data }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 8,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<div className="mt-4 mb-10">
				<Slider {...settings} className="slider-container w-[86vw]">
					{data.map((item) => {
						return <MovieCard key={item.id} item={item} />;
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;
