import { GenreInterface, MovieInterface } from "@/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoDotFill } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";
import imdbIcon from "@/public/icons/imdb.svg";
import Link from "next/link";

type Props = {
  genres: GenreInterface[];
  movies: MovieInterface[];
};

const Hero = ({ movies, genres }: Props) => {
  return (
    <Carousel opts={{ watchDrag: false }} className="select-none">
      <CarouselContent className="h-screen">
        {movies
          .filter((movie) => movie.poster_path)
          .slice(2, 7)
          .map((movie) => {
            return (
              <CarouselItem key={movie.id} className="relative">
                <div className="hero_gradient"></div>
                <p className="hidden md:block absolute top-1/2 right-0 pr-6 py-3 pl-4 border-l-[3px] border-mainPink-1 text-lg glassmorphism_white">
                  Now In Moviecine
                </p>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  width={1920}
                  height={1080}
                  alt={movie.title}
                  priority
                  className="h-full object-cover w-full"
                />
                <div className="wrapper absolute bottom-[10%] 2lg:bottom-[20%] z-20">
                  <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {movie.title}{" "}
                  </h1>
                  <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-6">
                    <div className="flex items-center gap-2">
                      <Image
                        src={imdbIcon}
                        height={50}
                        width={50}
                        alt="imdb"
                        className="size-4 xs:size-5 md:size-6"
                      />
                      <p className="text-lg xs:text-xl font-semibold text-slate-200">
                        {movie.vote_average.toFixed(1)}
                        &nbsp;
                        <span className="font-light text-sm xs:text-base italic">
                          / 10
                        </span>
                      </p>
                    </div>
                    <GoDotFill className="text-[#ddd] opacity-50 hidden md:block" />
                    <div className="hidden md:flex items-center gap-2">
                      {genres
                        .filter((item) => movie.genre_ids.includes(item.id))
                        .slice(0, 2)
                        .map((item) => {
                          return (
                            <p
                              key={item.id}
                              className="glassmorphism_white text-slate-100 px-8 py-1 rounded-full text-sm md:text-base"
                            >
                              {item.name}
                            </p>
                          );
                        })}
                    </div>
                    <GoDotFill className="text-[#ddd] opacity-50" />
                    <p className="text-lg xs:text-xl font-semibold text-slate-200">
                      {" "}
                      {movie.release_date.slice(0, 4)}
                    </p>
                  </div>
                  <p className="text-base xs:text-lg lg:text-xl text-slate-200 xs:max-w-[90%] md:max-w-[80%] 2lg:max-w-[50%] 2xl:max-w-[40%] line-clamp-2 md:line-clamp-3 font-light mt-2 xs:mt-4 md:mt-6">
                    {movie.overview}
                  </p>

                  <div className="flex gap-3 xs:gap-4 md:gap-6 mt-6 xs:mt-10  md:mt-12">
                    <Link href={`/details/${movie.id}?type=movie`}>
                      <button className="flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-8 md:py-4 text-base xs:text-lg md:text-xl font-semibold main_btn">
                        <FaInfoCircle />
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <div className="hidden md:block absolute bottom-14 lg:bottom-16 2lg:bottom-24 right-20 2lg:right-48 w-[50px]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default Hero;
