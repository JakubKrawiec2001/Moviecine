import { getCast, getMovieById } from "@/lib/tmdb";
import { CastMemberType, MovieDetailsInterface } from "@/types";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { type: string };
}) => {
  const cast = await getCast(searchParams.type, params.id);
  const movieDetails: MovieDetailsInterface = await getMovieById(
    params.id,
    searchParams.type
  );
  return (
    <div
      className="wrapper mt-24 xs:mt-28
        md:mt-36"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center">
          {searchParams.type === "movie"
            ? movieDetails.title
            : movieDetails.name}
        </h1>
        <p className="text-3xl xs:text-4xl lg:text-5xl font-bold text-mainPink-1">
          Cast
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8 2lg:gap-12 mt-12 md:mt-20">
        {cast?.map((item: CastMemberType) => {
          return (
            <div className="flex flex-col items-center gap-2" key={item.id}>
              {item.profile_path !== null ? (
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                  width={300}
                  height={500}
                  alt={item.name}
                  className="rounded-xl  object-cover h-[150px] md:h-[200px] xl:h-[250px]"
                />
              ) : (
                <div className="bg-mainBlack-3 w-full rounded-xl flex items-center justify-center h-[150px] md:h-[200px] xl:h-[250px]">
                  <RxAvatar className="text-7xl text-slate-400" />
                </div>
              )}
              <div className="flex flex-col text-center items-center">
                <p className="md:text-lg font-medium">{item.name}</p>
                <p className="text-slate-300">{item.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
