"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GenreInterface, MovieInterface } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import imdbIcon from "@/public/icons/imdb.svg";
import Link from "next/link";

type Props = {
  data: MovieInterface[];
  genres: GenreInterface[];
};

type CurrentMovieType = {
  name: string;
  imageSrc: string;
  description: string;
  genres: string[];
  rating: number;
  date: string;
};

const FeaturedCarousel = ({ data, genres }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [filteredData, setFilteredData] = useState<MovieInterface[]>([]);
  const [currentMovie, setCurrentMovie] = useState<CurrentMovieType>({
    name: "",
    imageSrc: "",
    description: "",
    genres: [],
    rating: 0,
    date: "",
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    const filtered = data.filter((item) => item.backdrop_path);
    setFilteredData(filtered);

    if (filtered.length > 0 && api) {
      setCurrent(api.selectedScrollSnap());

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }
  }, [api, data]);

  useEffect(() => {
    if (filteredData[current]) {
      const movie = filteredData[current];
      setCurrentMovie({
        name: movie.title,
        imageSrc: movie.backdrop_path,
        description: movie.overview,
        genres: movie.genre_ids.map(
          (genreId) => genres.find((genre) => genre.id === genreId)?.name || ""
        ),
        rating: movie.vote_average,
        date: movie.release_date,
      });
    }
  }, [current, filteredData, genres]);
  return (
    <div className="relative flex flex-col lg:flex-row gap-[4em] 2lg:gap-[6em] justify-between items-center min-h-[70vh] md:min-h-[50vh] 2lg:min-h-[70vh] mt-[2em] 2lg:mt-[4em]">
      <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-[#141414] via-[#1414140c] to-mainBlack-1 z-20"></div>
      <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-[#141414] via-[#1414140c] to-mainBlack-1 z-20"></div>
      <Image
        width={1920}
        height={1080}
        alt={currentMovie.name}
        src={`https://image.tmdb.org/t/p/original/${currentMovie.imageSrc}`}
        className="absolute w-full h-full object-cover"
      />
      <div className="flex flex-col gap-[5em] lg:w-1/2 z-50">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold">
            Featured in Moviecine
          </h2>
          <p className="text-slate-300 text-lg 2lg:text-xl">
            Best featured for you today
          </p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg 2lg:text-xl">
            #{current + 1} in Moviecine
          </span>
          <p className="font-bold text-3xl md:text-4xl 2lg:text-5xl mt-6 line-clamp-1">
            {currentMovie.name}
          </p>
          <div className="flex items-center gap-2 my-4">
            <div className="flex items-center gap-2 pr-1 border-r-[1px] border-slate-400">
              <Image
                src={imdbIcon}
                height={50}
                width={50}
                alt="imdb"
                className="size-4 xs:size-5 md:size-6"
              />
              <p className="text-lg xs:text-xl font-semibold">
                {currentMovie.rating.toFixed(1)}
                &nbsp;
              </p>
            </div>
            <p className="text-slate-300 2lg:text-lg">
              {currentMovie.date.slice(0, 4)}
            </p>
            <div className="size-1 2lg:size-2 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-300 2lg:text-lg">
              <p>{currentMovie.genres[0]}</p>
              <div className="size-1 2lg:size-2 bg-slate-300 rounded-full"></div>
              <p>{currentMovie.genres[1]}</p>
            </div>
          </div>
          <p className="text-lg 2lg:text-xl line-clamp-3 lg:w-[80%]">
            {currentMovie.description}
          </p>
          <div className="flex gap-3 xs:gap-4 md:gap-6 mt-6 xs:mt-10  md:mt-12">
            <button className="main_btn flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-6 md:py-4 text-base xs:text-lg md:text-xl font-semibold">
              <FaCirclePlay className="text-2xl" />
              Trailer
            </button>
            <button className="flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-6 md:py-4 text-base xs:text-lg md:text-xl font-semibold glassmorphism_white rounded-xl hover:bg-slate-300 hover:text-mainBlack-1 transition-colors">
              <CiBookmark className="text-3xl" />
              Watchlist
            </button>
          </div>
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className="hidden lg:block w-1/2 z-50"
        opts={{ align: "start", loop: true, slidesToScroll: 1 }}
      >
        <CarouselContent className="flex items-center gap-4">
          {filteredData.map((item, i) => {
            return (
              <CarouselItem
                key={item.id}
                className={`basis-auto h-[500px] transition-all `}
              >
                {current === i ? (
                  <Link
                    href={`/details/${item.id}/?type=movie`}
                    className={`group h-full ${
                      current === i
                        ? "opacity-100 cursor-pointer"
                        : "opacity-50 cursor-default"
                    }`}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      width={300}
                      height={500}
                      alt={item.title}
                      className={`rounded-xl ${
                        current === i ? "group-hover:scale-[1.02]" : ""
                      }  w-full h-full transition-transform object-contain`}
                    />
                  </Link>
                ) : (
                  <div
                    className={`group h-full ${
                      current === i
                        ? "opacity-100 cursor-pointer"
                        : "opacity-50 cursor-default"
                    }`}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      width={300}
                      height={500}
                      alt={item.title}
                      className={`rounded-xl ${
                        current === i ? "group-hover:scale-[1.02]" : ""
                      }  w-full h-full transition-transform object-contain`}
                    />
                  </div>
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute w-[15%] h-full right-0 top-0 bg-gradient-to-r from-[#14141406] to-mainBlack-1 z-10"></div>
        <CarouselPrevious className="border-none bg-[#27272ba4] 2lg:hover:bg-mainBlack-3 z-20 lg:-left-[5em] xl:-left-[6em]" />
        <CarouselNext className="border-none bg-[#27272ba4] 2lg:hover:bg-mainBlack-3 z-20 lg:right-[1em] 2xl:right-0" />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
