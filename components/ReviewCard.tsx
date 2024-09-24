import { formatDate } from "@/lib/utils";
import { ReviewType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ data }: { data: ReviewType }) => {
  return (
    <Link
      href={`/details/${data.movie_id}?type=${data.mediaType}`}
      key={data?.$id}
      className="lg:w-[48%] 2lg:w-[45%] flex flex-col md:flex-row 2lg:flex-col xl:flex-row md:items-center 2lg:items-start xl:items-center gap-4 border-[2px] border-mainBlack-3 p-4 rounded-xl hover:border-slate-600 transition-colors"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.posterPath}`}
        width={300}
        height={500}
        alt={data.title}
        className="rounded-xl object-fill group-hover:scale-[1.02]  transition-transform w-[40%] md:w-[20%] 2lg:w-[30%] xl:w-[20%]"
      />
      <div className="flex flex-col">
        <p className="text-slate-300 text-sm md:text-base line-clamp-1">
          Rated on {formatDate(data.$createdAt!)}
        </p>
        <h3 className="text-xl md:text-2xl mt-1 font-bold">{data.title}</h3>
        <div className="text-xl flex items-center gap-1 cursor-pointer group mt-2">
          <FaStar className="text-yellow-400" />
          <p className="text-yellow-400">
            {data.rating}
            <span className="font-light text-yellow-500 text-sm xs:text-base italic">
              /10
            </span>
          </p>
        </div>
        <div className="flex flex-col mt-2 md:mt-4">
          <p className="text-slate-300 text-sm md:text-base">Review</p>
          <p className="text-lg md:text-xl line-clamp-3">{data.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
