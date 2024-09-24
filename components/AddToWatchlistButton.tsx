"use client";

import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import spinner from "../public/icons/spinner.svg";
import Image from "next/image";
import { useWatchlist } from "@/context/watchlistContext";
import { WatchlistType } from "@/types";

type Props = {
  movieId: string;
  userId: string;
  title: string;
  posterPath: string;
  mediaType: string;
};

const AddToWatchlistButton = ({
  movieId,
  userId,
  title,
  posterPath,
  mediaType,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleDelete, watchlistData, setWatchlistData } = useWatchlist();
  const isInWatchlist = watchlistData.some(
    (item: WatchlistType) => item.movieId === movieId
  );

  const addToWatchlist = async (
    movieId: string,
    userId: string,
    title: string,
    posterPath: string,
    mediaType: string
  ) => {
    if (isLoading) return;
    if (isInWatchlist) return;
    try {
      setIsLoading(true);
      const response = await fetch("/api/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
          userId,
          title,
          posterPath,
          mediaType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to watchlist");
      }

      const data = await response.json();
      // @ts-ignore
      setWatchlistData((prevData: WatchlistType[]) => [...prevData, data]);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteByMovieId = (movieId: string) => {
    if (isLoading) return;
    const item = watchlistData.find((item) => item.movieId === movieId);

    if (item) {
      handleDelete(item.$id);
      // @ts-ignore
      setWatchlistData((prevData: WatchlistType[]) => {
        return prevData.filter(
          (watchlistItem) => watchlistItem.movieId !== movieId
        ) as WatchlistType[];
      });
    } else {
      console.error("Item not found in watchlist");
    }
  };

  return (
    <>
      {!isInWatchlist ? (
        <button
          disabled={isLoading}
          className={`flex items-center gap-2 md:gap-3 px-4 py-3 xs:px-5 md:px-4  text-lg font-semibold glassmorphism_white rounded-xl z-50  ${
            isLoading
              ? "opacity-50"
              : "hover:bg-slate-300 hover:text-mainBlack-1 transition-colors"
          }`}
          onClick={() =>
            addToWatchlist(movieId, userId, title, posterPath, mediaType)
          }
        >
          <CiBookmark className="text-2xl" />
          Add to Watchlist
          {!isLoading ? (
            ""
          ) : (
            <Image
              src={spinner}
              width={40}
              height={40}
              alt="Loading..."
              className="size-[10px] md:size-[20px] animate-spin "
            />
          )}
        </button>
      ) : (
        <button
          disabled={isLoading}
          className={`flex items-center gap-2 md:gap-3 px-4 py-3 xs:px-5 md:px-4 text-mainBlack-1 text-lg font-semibold bg-slate-200 rounded-xl z-50  ${
            isLoading
              ? "opacity-50"
              : "hover:bg-slate-300 hover:text-mainBlack-1 transition-colors"
          }`}
          onClick={() => handleDeleteByMovieId(movieId)}
        >
          <FaBookmark className="text-2xl" />

          {!isLoading ? (
            ""
          ) : (
            <Image
              src={spinner}
              width={40}
              height={40}
              alt="Loading..."
              className="size-[10px] md:size-[20px] animate-spin "
            />
          )}
        </button>
      )}
    </>
  );
};

export default AddToWatchlistButton;
