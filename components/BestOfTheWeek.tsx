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

const BestOfTheWeek = () => {
	return <div>BestOfTheWeek</div>;
};

export default BestOfTheWeek;
