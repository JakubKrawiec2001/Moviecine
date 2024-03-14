"use client";

import MovieCard from "./MovieCard";

const Carousel = ({ popularMovies }) => {
	return (
		<div className="flex mt-2 mb-10 overflow-hidden">
			{popularMovies.map((item) => {
				return <MovieCard key={item.id} item={item} />;
			})}
		</div>
	);
};

export default Carousel;
