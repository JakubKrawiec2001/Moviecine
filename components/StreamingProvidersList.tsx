"use client";

import { StreamingProvidersType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
	data: StreamingProvidersType[];
};

const StreamingProvidersList = ({ data }: Props) => {
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
				Streaming Providers
			</h2>
			<Carousel
				setApi={setApi}
				className="mt-3 md:mt-6"
				opts={{ dragFree: true, slidesToScroll: "auto" }}>
				<CarouselContent className="flex gap-2">
					{data.slice(0, 30).map((item) => {
						return (
							<CarouselItem
								key={item.provider_id}
								className="basis-auto h-[80px] lg:h-[100px]">
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
									width={300}
									height={300}
									alt={item.provider_name}
									className="w-full h-full object-contain rounded-xl"
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

export default StreamingProvidersList;
