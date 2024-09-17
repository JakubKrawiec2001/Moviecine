"use client";

import Image from "next/image";
import spinner from "../public/icons/spinner.svg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getDiscoveredMovies } from "@/lib/tmdb";
import { MovieInterface } from "@/types";
import AllMovies from "./AllMovies";

let page = 1;

const LoadMore = ({ genre }: { genre: string }) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<MovieInterface[]>([]);
  useEffect(() => {
    if (inView) {
      getDiscoveredMovies(page, "movie", genre).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data, genre]);
  useEffect(() => {
    if (!genre) return;

    setData([]);
    page = 1;
    getDiscoveredMovies(page, "movie", genre).then((res) => {
      setData(res);
    });
  }, [genre]);
  return (
    <>
      <AllMovies movies={data} />
      <div className="flex items-center justify-center mt-12" ref={ref}>
        <Image
          src={spinner}
          width={40}
          height={40}
          alt="Loading..."
          className="size-[35px] md:size-[50px] animate-spin "
        />
      </div>
    </>
  );
};

export default LoadMore;
