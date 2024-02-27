"use client";

import Image from "next/image";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaStar, FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";

const Hero = ({ movieDetail, movieImages }) => {
	const { title, vote_average, release_date, runtime, overview } = movieDetail;

	const date = release_date.slice(0, 4);

	return (
		<div className="relative w-full h-[70vh] overflow-hidden  rounded-[30px]">
			<Image
				src={`https://image.tmdb.org/t/p/original/${movieImages[6].file_path}`}
				width={1400}
				height={100}
				className="w-full h-full object-cover object-center"
				alt={title}
			/>
			<div className="absolute left-20 top-1/2 translate-y-[-50%] w-1/3 z-10">
				<div className="flex items-center gap-2">
					<p className="text-lg flex items-center gap-1">
						<FaStar className="text-mainPink" />
						{vote_average}
					</p>
					<GoDotFill />
					<p className="text-lg">{date}</p>
					<GoDotFill />
					<p className="text-lg">{runtime} min</p>
				</div>
				<h1 className="text-9xl font-extrabold mb-2">{title}</h1>
				<p className="line-clamp-3 text-lg">{overview}</p>
				<div className="flex gap-6 mt-10">
					<button className="flex items-center gap-2 bg-mainPink px-6 py-2 text-lg rounded-[30px]  font-semibold">
						<FaPlay /> Watch Trailer
					</button>
					<button className="flex items-center gap-2 bg-white/30 px-6 py-2 text-lg rounded-[30px]  font-semibold">
						<IoAddCircleOutline className="text-2xl" />
						Add To List
					</button>
				</div>
			</div>
			<div className="absolute bottom-10 right-8 flex items-center gap-4 z-10">
				<IoIosArrowDropleftCircle className="text-4xl text-mainPink" />
				{movieImages.slice(0, 4).map((image) => {
					return (
						<Image
							src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
							width={150}
							height={100}
							className="rounded-[10px]"
							alt={title}
							key={image.file_path}
						/>
					);
				})}
				<IoIosArrowDroprightCircle className="text-4xl text-mainPink" />
			</div>
			<div className="absolute top-0 opacity-60 bg-black w-full h-full"></div>
		</div>
	);
};

export default Hero;
