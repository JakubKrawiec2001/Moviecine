"use client";

import { calculateDaysAgo, formatDate } from "@/lib/utils";
import { UserReviewType } from "@/types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaStar } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

type Props = {
  userReviews: UserReviewType[];
};

const UserReviews = ({ userReviews }: Props) => {
  const [sortMethod, setSortMethod] = useState<"date" | "rating">("date");
  const sortByRating = (reviews: UserReviewType[]) => {
    return reviews.sort((a, b) => {
      const ratingA = a.author_details.rating ?? 0;
      const ratingB = b.author_details.rating ?? 0;
      return ratingB - ratingA;
    });
  };

  const sortByDate = (reviews: UserReviewType[]) => {
    return reviews.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  };

  const handleSortChange = (value: "date" | "rating") => {
    setSortMethod(value);
  };

  const sortedReviews = () => {
    if (!userReviews) return;

    if (sortMethod === "rating") {
      return sortByRating([...userReviews]);
    }
    return sortByDate([...userReviews]);
  };
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
        <h2 className="text-2xl 2lg:text-3xl xl:text-4xl font-bold border-l-4 border-mainPink-1 pl-2">
          User Reviews
        </h2>
        <Select value={sortMethod} onValueChange={handleSortChange}>
          <SelectTrigger className="md:w-[40%] 2lg:w-[25%] text-lg font-light">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              value="date"
              className="text-black cursor-pointer 2lg:hover:bg-slate-100 transition-colors text-lg font-medium"
            >
              From newest
            </SelectItem>
            <SelectItem
              value="rating"
              className="text-black cursor-pointer 2lg:hover:bg-slate-100 transition-colors text-lg font-medium"
            >
              From best rated
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-6 md:gap-12">
        {sortedReviews()
          ?.slice(0, 4)
          .map((item) => {
            return (
              <div
                className="flex flex-col gap-6 bg-mainBlack-2 px-4 md:px-10 py-8 rounded-xl"
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-mainPink-2 rounded-full">
                    <RxAvatar className="text-5xl text-slate-300 p-2" />
                  </div>
                  <div className="flex flex-col">
                    <p className="md:text-lg font-bold">
                      {item.author_details.username}
                    </p>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500 text-xl" />
                      <p className="flex items-center text-xl font-semibold">
                        {item.author_details.rating}
                        &nbsp;
                        <span className="font-light text-base italic">
                          / 10
                        </span>
                      </p>
                    </span>
                  </div>
                </div>
                <p className="md:text-lg line-clamp-4 text-slate-300">
                  {item.content}
                </p>
                <div className="flex flex-col md:flex-row md:items-center justify-between mt-6">
                  <p className="text-sm md:text-base">
                    {formatDate(item.created_at)}
                  </p>
                  <p className="text-sm md:text-base">
                    {calculateDaysAgo(item.created_at)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserReviews;
