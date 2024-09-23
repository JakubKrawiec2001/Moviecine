"use client";

import { MovieInterface } from "@/types";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

type Props = {
  data: MovieInterface[];
};

const poppins = Poppins({ subsets: ["latin"], weight: "800" });

const Top10Carousel = ({ data }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

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
        left: -600,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 600,
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
    <div>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold">
        Top 10 Now Playing
      </h2>
      <div className="relative w-full mt-4 md:mt-8">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll 2lg:overflow-x-hidden space-x-4 w-full snap-x snap-mandatory gap-[1em] md:gap-[2em] 2lg:gap-[4em] overflow-y-hidden"
          style={{ scrollBehavior: "smooth", touchAction: "pan-x" }}
        >
          {data
            .filter((item) => item.poster_path)
            .slice(0, 10)
            .map((item, i) => {
              return (
                <div
                  className="min-w-[150px] flex-shrink-0 h-[150px] xs:h-[200px] md:h-[300px] cursor-pointer"
                  key={item.id}
                >
                  <Link
                    className="relative group h-full"
                    href={`/details/${item.id}?type=movie`}
                  >
                    <p
                      className={`absolute bottom-[-30%] ${
                        i + 1 === 1 ? "left-0 md:left-10" : "-left-3 md:left-0 "
                      } text-[7em] xs:text-[10em] md:text-[14em] font-extrabold text-[#b7b7b7] cursor-pointer group-hover:text-white transition-colors text_stroke ${
                        poppins.className
                      }`}
                    >
                      {i + 1}
                    </p>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      width={300}
                      height={500}
                      alt={item.title}
                      className="rounded-xl w-full h-full object-contain pl-[2em] md:pl-[6em]"
                    />
                  </Link>
                </div>
              );
            })}
        </div>
        {isLeftArrowVisible && (
          <button
            className="group absolute hidden 2lg:flex left-0 pb-12 border-none rounded-none carousel_shadow_left top-1/2 transform -translate-y-1/2 items-center justify-center"
            onClick={scrollLeft}
          >
            <FaArrowLeft className="text-2xl group-hover:text-mainPink-2 transition-colors" />
          </button>
        )}
        {isRightArrowVisible && (
          <button
            className="group absolute hidden 2lg:flex right-0 pb-12 border-none rounded-none carousel_shadow_right top-1/2 transform -translate-y-1/2 items-center justify-center"
            onClick={scrollRight}
          >
            <FaArrowRight className="text-2xl group-hover:text-mainPink-2 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Top10Carousel;
