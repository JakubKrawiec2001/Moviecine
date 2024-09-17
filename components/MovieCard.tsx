import { MovieInterface } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const MovieCard = ({ movie }: { movie: MovieInterface }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div key={movie.id} className="group cursor-pointer">
      {isLoading && (
        <div className="mb-4">
          <div className="bg-slate-300 animate-pulse w-[300px] h-[500px] rounded-xl"></div>
          <div className="bg-slate-300 animate-pulse w-[100px] h-[20px] rounded-xl mt-2"></div>
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
      <div className="flex justify-between mt-3">
        <p className="md:text-lg group-hover:text-slate-300 transition-colors line-clamp-1">
          {movie.media_type
            ? movie.media_type === "movie"
              ? movie.title
              : movie.name
            : movie.title || movie.name}
        </p>
        <p className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {movie.vote_average ? movie.vote_average.toFixed(1) : "0"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
