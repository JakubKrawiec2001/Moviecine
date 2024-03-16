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
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};
	return (
		<div>
			<div className="mt-2 mb-8 lg:mb-10">
				<Slider
					{...settings}
					className="slider-container 2lg:w-[75vw] xl:w-[79vw] 2xl:w-[82vw] 4xl:w-[85vw]">
					{data.map((item) => {
						return <MovieCard key={item.id} item={item} />;
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;
