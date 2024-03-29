"use client";

import Image from "next/image";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaStar, FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";

const Hero = ({ movieDetail, movieImages }) => {
	const [slideNumber, setSlideNumber] = useState(6);
	const { title, vote_average, release_date, runtime, overview } = movieDetail;

	const date = release_date.slice(0, 4);

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 6 : slideNumber - 1;
			if (slideNumber === 6) {
				newSlideNumber = 3;
			}
		} else {
			newSlideNumber = slideNumber === 6 ? 0 : slideNumber + 1;
			if (slideNumber === 3) {
				newSlideNumber = 6;
			}
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<div className="relative flex flex-col justify-center 3xl:flex-row 2lg:justify-between 2lg:items-center w-full min-h-[50vh] lg:min-h-[40vh] xl:min-h-[60vh] 3xl:min-h-[70vh] overflow-hidden  rounded-[30px]">
			<Image
				src={`https://image.tmdb.org/t/p/original/${movieImages[slideNumber].file_path}`}
				width={1400}
				height={100}
				className="absolute w-full h-full object-cover object-center"
				alt={title}
			/>
			<div className="p-4  lg:ml-10 md:w-[70%] lg:w-[50%] 3xl:w-[40%] 2lg:mt-24 2lg:self-start z-10">
				<div className="flex items-center gap-1 lgMobile:gap-2">
					<p className="text-sm lgMobile:text-base md:text-lg flex items-center gap-1">
						<FaStar className="text-mainPink" />
						{vote_average}
					</p>
					<GoDotFill />
					<p className="text-sm lgMobile:text-base md:text-lg">{date}</p>
					<GoDotFill />
					<p className="text-sm lgMobile:text-base md:text-lg">{runtime} min</p>
				</div>
				<h1 className="text-6xl lgMobile:text-7xl md:text-8xl 2xl:text-9xl font-extrabold mb-2">
					{title}
				</h1>
				<p className="line-clamp-3 text-sm lgMobile:text-base md:text-lg">
					{overview}
				</p>
				<div className="flex gap-2 md:gap-4 mt-6 md:mt-8">
					<button className="flex items-center gap-1 lgMobile:gap-2 bg-mainPink px-4 py-2  lg:px-6 text-sm lgMobile:text-base md:text-lg rounded-[30px]  font-semibold cursor-pointer hover:bg-hoverPink transition-colors">
						<FaPlay /> Watch Trailer
					</button>
					<button className="flex items-center gap-1 lgMobile:gap-2 bg-white/30 px-4 py-2  lg:px-6 text-xs lgMobile:text-base md:text-lg rounded-[30px]  font-semibold cursor-pointer hover:bg-white/60 hover:text-black transition-colors">
						<IoAddCircleOutline />
						Add To List
					</button>
				</div>
			</div>
			<div className="hidden 2lg:flex items-center gap-4 self-end 2lg:mt-16 xl:mt-10 mb-8 mr-8  z-10 ">
				<IoIosArrowDropleftCircle
					className="text-4xl text-mainPink cursor-pointer hover:text-hoverPink transition-colors"
					onClick={() => handleMove("l")}
				/>
				{movieImages.slice(0, 4).map((image, i) => {
					return (
						<Image
							src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
							width={100}
							height={100}
							onClick={() => setSlideNumber(i)}
							className={`rounded-[10px] cursor-pointer xl:w-[120px] 3xl:w-[150px] hover:border-2 border-mainPink ${
								slideNumber === i ? "border-2 border-mainPink" : ""
							}`}
							alt={title}
							key={image.file_path}
						/>
					);
				})}
				<IoIosArrowDroprightCircle
					className="text-4xl text-mainPink cursor-pointer hover:text-hoverPink transition-colors"
					onClick={() => handleMove("r")}
				/>
			</div>
			<div className="absolute top-0 opacity-60 bg-black w-full h-full"></div>
		</div>
	);
};

export default Hero;
