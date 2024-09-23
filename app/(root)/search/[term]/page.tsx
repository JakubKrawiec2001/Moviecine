import MovieCard from "@/components/MovieCard";
import { getSearchMovies } from "@/lib/tmdb";
import { MovieInterface } from "@/types";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { term: string } }) => {
  if (!params.term) notFound();

  const termToUse = decodeURI(params.term);

  const data = await getSearchMovies(termToUse);
  return (
    <div
      className="wrapper mt-24 xs:mt-28
    md:mt-36"
    >
      <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold">
        Search results for <span className="text-mainPink-1">{termToUse}</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8 2lg:gap-12 mt-6 md:mt-10">
        {data.length != 0 ? (
          data
            .filter((item: MovieInterface) => item.poster_path)
            .map((item: MovieInterface) => {
              return (
                <MovieCard movie={item} key={item.id} type={item.media_type!} />
              );
            })
        ) : (
          <p>No results for {termToUse}</p>
        )}
      </div>
    </div>
  );
};

export default page;
