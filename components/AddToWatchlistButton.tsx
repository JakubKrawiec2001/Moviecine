"use client";

import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import spinner from "../public/icons/spinner.svg";
import Image from "next/image";

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
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const addToWatchlist = async (
    movieId: string,
    userId: string,
    title: string,
    posterPath: string,
    mediaType: string
  ) => {
    try {
      setIsLoading(true);
      setIsInWatchlist(true);
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
        setIsInWatchlist(false);
        throw new Error("Failed to add to watchlist");
      }

      const data = await response.json();
      console.log("Added to watchlist:", data);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWatchlist = async (userId: string) => {
    try {
      const response = await fetch("/api/watchlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userId,
        },
      });
      const watchlist = await response.json();

      const isInList = watchlist.some((item: any) => item.movieId === movieId);

      setIsInWatchlist(isInList);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchWatchlist(userId);
    }
  }, [userId]);

  return (
    <>
      {!isInWatchlist ? (
        <button
          disabled={isLoading}
          className={`flex items-center gap-2 md:gap-3 px-4 py-3 xs:px-5 md:px-4  text-lg font-semibold glassmorphism_white rounded-xl  ${
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
          className={`flex items-center gap-2 md:gap-3 px-4 py-3 xs:px-5 md:px-4 text-mainBlack-1 text-lg font-semibold bg-slate-200 rounded-xl  ${
            isLoading
              ? "opacity-50"
              : "hover:bg-slate-300 hover:text-mainBlack-1 transition-colors"
          }`}
          onClick={() =>
            addToWatchlist(movieId, userId, title, posterPath, mediaType)
          }
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
