import AllMovies from "@/components/AllMovies";
import GenresCarousel from "@/components/GenresCarousel";
import LoadMore from "@/components/LoadMore";
import { getGenres } from "@/lib/tmdb";
import React from "react";

const page = async ({ searchParams }: { searchParams: { genre: string } }) => {
  const genres = await getGenres("movie");
  return (
    <div className="wrapper mt-36">
      <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Movies
      </h1>
      <GenresCarousel genres={genres} />
      <LoadMore genre={searchParams.genre} />
    </div>
  );
};

export default page;
