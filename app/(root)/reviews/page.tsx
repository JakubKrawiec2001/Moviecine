import MovieCard from "@/components/MovieCard";
import ReviewCard from "@/components/ReviewCard";
import { getLoggedInUser, getReviews } from "@/lib/actions/user.actions";
import { getAllTrending } from "@/lib/tmdb";
import { MovieInterface, ReviewType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";

type ReviewTypeProps = {
  documents: ReviewType[];
};

const page = async () => {
  const user = await getLoggedInUser();
  const nowTrendingAll = await getAllTrending();
  const reviews: ReviewTypeProps = await getReviews(user.$id);
  return (
    <div
      className="wrapper mt-24 xs:mt-28
md:mt-36"
    >
      <h1 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center">
        My Reviews
      </h1>
      <div className="flex flex-col 2lg:flex-row justify-between items-start mt-12 md:mt-20 gap-12 lg:gap-16 2lg:gap-0">
        <div className="flex flex-wrap gap-6 2lg:w-[70%]">
          {reviews.documents?.length != 0 ? (
            reviews.documents?.map((item) => {
              return <ReviewCard key={item?.$id} data={item} />;
            })
          ) : (
            <Link
              href="/"
              className="text-slate-300 md:text-lg underline hover:text-white transition-colors flex items-center gap-2"
            >
              Rate your first movie or series
              <IoArrowRedoSharp className="text-lg md:text-xl" />
            </Link>
          )}
        </div>
        <div className="2lg:w-[30%] min-h-[50vh]">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold border-l-[3px] border-mainPink-1 pl-2">
            More to exlore
          </h2>
          <div className="flex flex-wrap gap-8 mt-8">
            {nowTrendingAll
              .filter((item: MovieInterface) => item.poster_path)
              .slice(0, 4)
              .map((item: MovieInterface) => {
                return (
                  <Link
                    href={`/details/${item.id}?type=${item.media_type}`}
                    key={item.id}
                    className="group cursor-pointer w-[40%] md:w-[20%] lg:w-[22%] 2lg:w-[40%]"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      width={300}
                      height={500}
                      alt={item.title}
                      className="rounded-xl object-fill group-hover:scale-[1.02]  transition-transform"
                    />
                    <div className="flex flex-col lg:flex-row justify-between mt-1 md:mt-3">
                      <p className="md:text-lg group-hover:text-slate-300 transition-colors line-clamp-1">
                        {item.media_type
                          ? item.media_type === "movie"
                            ? item.title
                            : item.name
                          : item.title || item.name}
                      </p>
                      <p className="flex items-center gap-1 text-sm md:text-base">
                        <FaStar className="text-yellow-400" />
                        {item.vote_average ? item.vote_average.toFixed(1) : "0"}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
