import { MovieInterface } from "@/types";
import Image from "next/image";
import React from "react";
import MovieCard from "./MovieCard";

const AllMovies = ({ movies }: { movies: MovieInterface[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8 2lg:gap-12 mt-20">
      {movies.map((item: MovieInterface) => {
        return <MovieCard movie={item} key={item.id} />;
      })}
    </div>
  );
};

export default AllMovies;
