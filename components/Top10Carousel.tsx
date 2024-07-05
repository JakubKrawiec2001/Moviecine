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
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
	data: MovieInterface[];
};

const Top10Carousel = ({ data }: Props) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

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
			<Carousel setApi={setApi} className="mt-3 md:mt-6">
				<CarouselContent className="flex gap-[1em] md:gap-[2em] 2lg:gap-[4em]">
					{data.slice(0, 10).map((item, i) => {
						return (
							<CarouselItem
								key={item.id}
								className="group flex items-center gap-2 md:gap-4 basis-auto h-[150px] xs:h-[200px] md:h-[300px] cursor-pointer">
								<span className="text-[5em] md:text-[10em] font-extrabold text-[#b7b7b7] cursor-pointer group-hover:text-white transition-colors">
									{i + 1}
								</span>
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
									width={300}
									height={500}
									alt={item.title}
									className="rounded-xl group-hover:scale-[1.02] w-full h-full transition-transform object-contain"
								/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				{current !== 1 && (
					<CarouselPrevious className="hidden 2lg:flex left-0 pb-12 border-none rounded-none carousel_shadow_left" />
				)}
				{current !== 8 && (
					<CarouselNext className="hidden 2lg:flex right-0 pb-12 border-none rounded-none carousel_shadow_right" />
				)}
			</Carousel>
		</div>
	);
};

export default Top10Carousel;
