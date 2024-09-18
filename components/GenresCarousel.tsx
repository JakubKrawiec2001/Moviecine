"use client";

import { GenreInterface } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const GenresCarousel = ({
  genres,
  type,
}: {
  genres: GenreInterface[];
  type: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);
  const [activeGenreId, setActiveGenreId] = useState<number | string>(
    "featured"
  );
  const router = useRouter();

  const handleGenreSelect = (id: any) => {
    setActiveGenreId(id);
    if (id) {
      router.push(`/${type}?genre=${id}`);
    } else {
      router.push(`/${type}`);
    }
  };

  const checkArrowsVisibility = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setIsLeftArrowVisible(scrollLeft > 0);

      setIsRightArrowVisible(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const currentCarousel = carouselRef.current;

    if (currentCarousel) {
      currentCarousel.addEventListener("scroll", checkArrowsVisibility);

      checkArrowsVisibility();
    }

    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener("scroll", checkArrowsVisibility);
      }
    };
  }, []);

  return (
    <div className="relative w-full mt-12">
      {isLeftArrowVisible && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-slate-300 hover:text-white  p-2 z-10 cursor-pointer bg-gradient-to-l from-[#1414149c] to-mainBlack-1 hover:from-[#141414cf] hover:to-mainBlack-1 w-[50px] h-full hidden 2lg:block"
        >
          &#9664;
        </button>
      )}
      <div
        ref={carouselRef}
        className="flex items-center overflow-x-scroll 2lg:overflow-x-hidden space-x-4 w-full snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth", touchAction: "pan-x" }}
      >
        <p
          className={`md:text-lg  bg-mainBlack-3 py-2 px-6 rounded-[10px] min-w-[150px] flex-shrink-0 text-center ${
            activeGenreId === "featured"
              ? "bg-white text-mainBlack-3"
              : "bg-mainBlack-3 text-slate-200 2lg:hover:text-white 2lg:hover:bg-mainBlack-2 transition-colors cursor-pointer"
          }`}
          onClick={() => handleGenreSelect("featured")}
        >
          Featured
        </p>
        {genres.map((genre) => (
          <p
            key={genre.id}
            className={`md:text-lg py-2 px-6 rounded-[10px] min-w-[150px] flex-shrink-0 text-center ${
              activeGenreId === genre.id
                ? "bg-white text-mainBlack-3"
                : "bg-mainBlack-3 text-slate-200 2lg:hover:text-white 2lg:hover:bg-mainBlack-2 transition-colors cursor-pointer"
            }`}
            onClick={() => handleGenreSelect(genre.id)}
          >
            {genre.name}
          </p>
        ))}
      </div>
      {isRightArrowVisible && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[50px] bg-gradient-to-r from-[#1414149c] to-mainBlack-1 hover:from-[#141414e7] hover:to-mainBlack-1 text-slate-300 hover:text-white  p-2 z-10 cursor-pointer h-full hidden 2lg:block"
        >
          &#9654;
        </button>
      )}
    </div>
  );
};

export default GenresCarousel;
