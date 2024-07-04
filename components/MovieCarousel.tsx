"use client";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { GenreInterface, MovieInterface } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
	data: MovieInterface[];
	type: "all" | "trending";
	label: string;
	genres: GenreInterface[];
};

const MovieCarousel = ({ data, type, label, genres }: Props) => {
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
			<h2 className="text-xl xs:text-2xl md:text-3xl font-bold">{label}</h2>
			<Carousel setApi={setApi} className="mt-3 md:mt-6">
				<CarouselContent className="flex gap-2">
					{data.map((item) => {
						return (
							<CarouselItem
								className={`group flex flex-col gap-2 md:gap-4 ${
									type === "all"
										? "basis-[40%] lg:basis-[12%]"
										: "basis-[50%] md:basis-1/2 lg:basis-[18%]"
								}  cursor-pointer`}
								key={item.id}>
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
									width={300}
									height={500}
									alt={item.title}
									className="rounded-xl group-hover:scale-[1.02] transition-transform"
								/>
								<div className="flex flex-col gap-1">
									<div className="flex">
										<p
											className={`text-white font-semibold ${
												type === "all"
													? "text-sm md:text-base"
													: "text-base md:text-xl"
											} line-clamp-1 group-hover:text-slate-300 transition-colors`}>
											{item.media_type
												? item.media_type === "movie"
													? item.title
													: item.name
												: item.title || item.name}
										</p>
									</div>
									<div
										className={`flex gap-2 ${
											type === "all"
												? "text-sm md:text-base"
												: "text-base md:text-lg"
										}`}>
										<p className="flex items-center gap-1">
											<FaStar className="text-yellow-400" />
											{item.vote_average.toFixed(1)}
										</p>
										<div className="flex gap-2 pl-2 line-clamp-1 text-slate-400 border-l-[1px] border-slate-600">
											{genres.map((genre) => {
												if (item.genre_ids.slice(0, 1).includes(genre.id)) {
													return (
														<p key={genre.id} className="line-clamp-1">
															{genre.name}
														</p>
													);
												}
											})}
											{item.genre_ids.length === 0 && <p>Other</p>}
										</div>
									</div>
								</div>
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

export default MovieCarousel;