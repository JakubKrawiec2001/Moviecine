"use client";

import {
  MovieDetailsInterface,
  CrewMemberType,
  User,
  VideoType,
} from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import imdbIcon from "@/public/icons/imdb.svg";
import CircularProgress from "./CircularProgress";
import { IoIosPeople } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { formatTime } from "@/lib/utils";
import AddToWatchlistButton from "./AddToWatchlistButton";
import MovieTrailerModal from "./MovieTrailerModal";
import ReviewPopup from "./ReviewPopup";

type Props = {
  data: MovieDetailsInterface;
  searchParams: { type: string };
  crew: CrewMemberType[];
  user: User;
  videos: VideoType[];
};

const DetailsHeader = ({ data, searchParams, crew, user, videos }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const getPercentage = (voteAverage: number) => {
    return Math.round(voteAverage * 10);
  };
  const percentage = getPercentage(data.vote_average);
  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-[#141414] via-[#14141494] to-mainBlack-1 z-20"></div>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-[#141414] via-[#1414140c] to-mainBlack-1 z-20"></div>
        <div className="wrapper flex flex-col md:flex-row items-center gap-[2em] 2lg:gap-[4em]  min-h-[90vh] md:min-h-[50vh] lg:min-h-[40vh] 2lg:min-h-[90vh] mt-[6em] lg:mt-[4em] 2lg:mt-[8em] xl:mt-[4em]">
          <div className="w-[80%] md:w-[50%] lg:w-[30%] 2lg:w-[50%] xl:w-[35%] 2xl:w-[25%]  h-full z-40">
            <Image
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              width={500}
              height={500}
              alt={data.title}
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-6 z-40 xs:w-[95%] md:w-[60%]">
            <div className="flex flex-col gap-1">
              <span className="text-lg 2lg:text-xl text-mainPink-1 font-extrabold uppercase">
                {searchParams.type}
              </span>
              <h1 className="text-3xl 2lg:text-4xl xl:text-5xl font-bold w-[90%] 2lg:w-full">
                {searchParams.type === "movie" ? data.title : data.name}
              </h1>
              <div className="flex items-center flex-wrap gap-2 2lg:gap-4 text-slate-300 text-lg 2lg:text-xl mt-2">
                <p>{data.tagline}</p>
                <div className="w-[1px] h-[15px] bg-slate-400"></div>
                {searchParams.type === "movie" ? (
                  <p>{data.release_date.slice(0, 4)}</p>
                ) : (
                  <div className="flex items-center gap-1">
                    <p>{data.first_air_date?.slice(0, 4)}</p>
                    <div className="w-[6px] h-[2px] bg-slate-400"></div>
                    <p>{data.last_air_date?.slice(0, 4)}</p>
                  </div>
                )}
                <div className="w-[1px] h-[15px] bg-slate-400"></div>
                {searchParams.type === "movie" ? (
                  <p>{formatTime(data.runtime)}</p>
                ) : (
                  <p>{data.number_of_seasons} seasons</p>
                )}

                <div className="w-[1px] h-[15px] bg-slate-400"></div>
                {data.spoken_languages?.slice(0, 1).map((item) => {
                  return <p key={item.name}>{item.name}</p>;
                })}
              </div>
              <div className="flex flex-wrap items-center mt-[1em] gap-4">
                {data.genres?.map((genre) => {
                  return (
                    <p
                      key={genre.id}
                      className="bg-gray-500 px-6 py-1 rounded-xl"
                    >
                      {genre.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-10 2lg:gap-12">
              <div className="flex flex-col md:gap-1">
                <p className="text-slate-300 font-medium">IMDb RATING</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={imdbIcon}
                    height={50}
                    width={50}
                    alt="imdb"
                    className="size-4 xs:size-5 md:size-6"
                  />
                  <p className="flex items-center text-xl font-semibold">
                    {data.vote_average?.toFixed(1)}

                    <span className="font-light text-lg italic">/ 10</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:gap-1">
                <p className="text-slate-300 font-medium">YOUR RATING</p>
                <ReviewPopup
                  movieId={data.id.toString()}
                  user={user}
                  title={
                    searchParams.type === "movie" ? data.title : data.name!
                  }
                  mediaType={searchParams.type}
                  posterPath={data.poster_path}
                />
              </div>
              <div className="flex flex-col md:gap-1">
                <p className="text-slate-300 font-medium">POPULARITY</p>
                <p className="flex items-center gap-1 font-medium text-xl">
                  <IoIosPeople className="text-green-500 text-3xl" />
                  {Math.round(data.popularity)}
                </p>
              </div>
              <CircularProgress
                percentage={percentage}
                userRating={data.vote_count}
              />
            </div>
            <div className="flex flex-wrap md:hidden 2lg:flex gap-3 xs:gap-4 md:gap-6 mt-[1em]">
              <button
                className={`main_btn ${
                  videos.length != 0 ? "flex" : "hidden"
                } items-center gap-2 md:gap-3 px-4 py-3 xs:px-5 md:px-4  text-lg font-semibold`}
                onClick={() => setIsOpen(true)}
              >
                <FaCirclePlay className="text-2xl" />
                Watch Trailer
              </button>
              <MovieTrailerModal
                videos={videos}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              <AddToWatchlistButton
                userId={user.$id}
                movieId={data.id.toString()}
                title={searchParams.type === "movie" ? data.title : data.name!}
                mediaType={searchParams.type}
                posterPath={data.poster_path}
              />
            </div>
            <div className="flex md:hidden 2lg:flex flex-col gap-6 mt-[1em]">
              <div className="flex flex-col GAP-1">
                <p className="text-slate-300 font-medium">OVERVIEW</p>
                <p className="text-lg mt-1 line-clamp-5">{data.overview}</p>
              </div>
              <div className="hidden 2lg:flex flex-wrap gap-10 ">
                {crew?.slice(0, 6).map((item) => {
                  return (
                    <div className="flex flex-col" key={item.id}>
                      <p className="text-xl font-medium">{item.name}</p>
                      <p className="text-slate-300 -mt-1">{item.job}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex 2lg:hidden gap-3 xs:gap-4 md:gap-6 wrapper mt-[1em] lg:mt-0">
          <button
            className={`main_btn ${
              videos.length != 0 ? "flex" : "hidden"
            } items-center gap-2 md:gap-3 px-4 py-3 xs:px-5 md:px-4  text-lg font-semibold z-40`}
            onClick={() => setIsOpen(true)}
          >
            <FaCirclePlay className="text-2xl" />
            Watch Trailer
          </button>
          <AddToWatchlistButton
            userId={user.$id}
            movieId={data.id.toString()}
            title={searchParams.type === "movie" ? data.title : data.name!}
            mediaType={searchParams.type}
            posterPath={data.poster_path}
          />
        </div>
        <div className="hidden md:flex 2lg:hidden flex-col gap-6 mt-[2em] wrapper">
          <div className="flex flex-col gap-1 z-40">
            <p className="text-slate-300 font-medium">OVERVIEW</p>
            <p className="text-lg mt-1">{data.overview}</p>
          </div>
          <div className="flex flex-wrap gap-10">
            {crew?.slice(0, 6).map((item) => {
              return (
                <div className="flex flex-col z-40" key={item.id}>
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-slate-300 -mt-1">{item.job}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHeader;
