"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieInterface } from "@/types";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  data: MovieInterface[];
};

const poppins = Poppins({ subsets: ["latin"], weight: "800" });

const Top10Carousel = ({ data }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold">
        Top 10 Now Playing
      </h2>
      <Carousel
        setApi={setApi}
        className="mt-3 md:mt-6"
        opts={{ dragFree: true, slidesToScroll: "auto" }}
      >
        <CarouselContent className="flex gap-[1em] md:gap-[2em] 2lg:gap-[4em]">
          {data
            .filter((item) => item.poster_path)
            .slice(0, 10)
            .map((item, i) => {
              return (
                <CarouselItem
                  className="basis-auto h-[150px] xs:h-[200px] md:h-[300px] cursor-pointer"
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
                </CarouselItem>
              );
            })}
        </CarouselContent>
        {current !== 1 && (
          <CarouselPrevious className="hidden 2lg:flex left-0 pb-12 border-none rounded-none carousel_shadow_left" />
        )}
        {current !== count && (
          <CarouselNext className="hidden 2lg:flex right-0 pb-12 border-none rounded-none carousel_shadow_right" />
        )}
      </Carousel>
    </div>
  );
};

export default Top10Carousel;
