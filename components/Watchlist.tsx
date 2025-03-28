"use client";

import { useWatchlist } from "@/context/watchlistContext";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import spinner from "../public/icons/spinner.svg";

const Watchlist = ({ user }: { user: User }) => {
  const { watchlistData, setWatchlistData } = useWatchlist();
  const [isLoading, setIsLoading] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(true);

  useEffect(() => {
    const fetchWatchlist = async (userId: string) => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/watchlist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            userId: userId,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch watchlist");
        }
        const data = await response.json();
        setWatchlistData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (user?.$id) {
      fetchWatchlist(user.$id);
    }
  }, [user, setWatchlistData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Image
          src={spinner}
          width={40}
          height={40}
          alt="Loading..."
          className="size-[50px] md:size-[80px] animate-spin "
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8 2lg:gap-12 mt-12 md:mt-20 relative min-h-[50vh]">
      {watchlistData.length != 0 ? (
        watchlistData?.map((item) => {
          return (
            <Link
              href={`/details/${item.movieId}?type=${item.mediaType}`}
              key={item.$id}
              className="group cursor-pointer"
            >
              {isImgLoading && (
                <div className="mb-4">
                  <div className="bg-slate-300 animate-pulse 2lg::w-[300px] h-[200px] 2lg::h-[500px] rounded-xl"></div>
                  <div className="bg-slate-300 animate-pulse w-[20%] h-[10px] md:w-[100px]   md:h-[20px] rounded-xl mt-2"></div>
                </div>
              )}
              <Image
                src={`https://image.tmdb.org/t/p/original/${item.posterPath}`}
                width={300}
                height={500}
                alt={item.title}
                className="rounded-xl object-fill group-hover:scale-[1.02]  transition-transform"
                onLoad={() => setIsImgLoading(false)}
              />

              <p className="md:text-lg group-hover:text-slate-300 transition-colors line-clamp-1 mt-1 md:mt-3">
                {item.title}
              </p>
            </Link>
          );
        })
      ) : (
        <p className="text-xl text-slate-400 text-center absolute left-1/2 -translate-x-1/2">
          Add movies and series to your watchlist
        </p>
      )}
    </div>
  );
};

export default Watchlist;
