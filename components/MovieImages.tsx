"use client";

import { ImageType } from "@/types";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type Props = {
  images: ImageType[];
};

const MovieImages = ({ images }: Props) => {
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
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl 2lg:text-3xl xl:text-4xl font-bold border-l-4 border-mainPink-1 pl-2">
        Images
      </h2>

      <Carousel
        setApi={setApi}
        opts={{ dragFree: true, slidesToScroll: "auto" }}
      >
        <CarouselContent>
          {images?.slice(0, 10).map((item, i) => {
            return (
              <CarouselItem
                key={i}
                className="overflow-hidden cursor-pointer basis-auto h-[100px] xs:h-[150px] md:h-[200px] lg:h-[250px]"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                  width={900}
                  height={600}
                  alt={item.file_path}
                  className="rounded-xl object-contain w-full h-full"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {current !== 1 && (
          <CarouselPrevious className="hidden 2lg:flex left-0 border-none rounded-none carousel_shadow_left" />
        )}
        {current !== count && (
          <CarouselNext className="hidden 2lg:flex right-0 border-none rounded-none carousel_shadow_right" />
        )}
      </Carousel>
    </div>
  );
};

export default MovieImages;
