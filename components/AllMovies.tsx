import { MovieInterface } from "@/types";
import Image from "next/image";
import React from "react";
import MovieCard from "./MovieCard";

const AllMovies = ({
	movies,
	type,
}: {
	movies: MovieInterface[];
	type: string;
}) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8 2lg:gap-12 mt-12 md:mt-20">
			{movies
				.filter((item) => item.poster_path)
				.map((item: MovieInterface) => {
					return <MovieCard movie={item} key={item.id} type={type}/>;
				})}
		</div>
	);
};

export default AllMovies;
