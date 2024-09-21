import { MovieInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const MovieCard = ({
	movie,
	type,
}: {
	movie: MovieInterface;
	type: string;
}) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Link
			href={`/details/${movie.id}?type=${type}`}
			key={movie.id}
			className="group cursor-pointer">
			{isLoading && (
				<div className="mb-4">
					<div className="bg-slate-300 animate-pulse 2lg::w-[300px] h-[200px] 2lg::h-[500px] rounded-xl"></div>
					<div className="bg-slate-300 animate-pulse w-[20%] h-[10px] md:w-[100px]   md:h-[20px] rounded-xl mt-2"></div>
				</div>
			)}
			<Image
				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				width={300}
				height={500}
				alt={movie.title}
				className="rounded-xl object-fill group-hover:scale-[1.02]  transition-transform"
				onLoad={() => setIsLoading(false)}
			/>
			<div className="flex flex-col lg:flex-row justify-between mt-1 md:mt-3">
				<p className="md:text-lg group-hover:text-slate-300 transition-colors line-clamp-1">
					{movie.media_type
						? movie.media_type === "movie"
							? movie.title
							: movie.name
						: movie.title || movie.name}
				</p>
				<p className="flex items-center gap-1 text-sm md:text-base">
					<FaStar className="text-yellow-400" />
					{movie.vote_average ? movie.vote_average.toFixed(1) : "0"}
				</p>
			</div>
		</Link>
	);
};

export default MovieCard;
