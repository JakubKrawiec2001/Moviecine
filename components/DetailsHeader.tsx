import { MovieDetailsInterface, CrewMember } from "@/types";
import Image from "next/image";
import React from "react";
import imdbIcon from "@/public/icons/imdb.svg";
import { FaRegStar } from "react-icons/fa";
import CircularProgress from "./CircularProgress";
import { IoIosPeople } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

type Props = {
	data: MovieDetailsInterface;
	searchParams: { type: string };
	crew: CrewMember[];
};

const DetailsHeader = ({ data, searchParams, crew }: Props) => {
	const getPercentage = (voteAverage: number) => {
		return Math.round(voteAverage * 10);
	};
	const percentage = getPercentage(data.vote_average);
	return (
		<>
			<div
				className="relative"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}>
				<div className="absolute w-full h-full inset-0 bg-gradient-to-r from-[#141414] via-[#14141494] to-mainBlack-1 z-20"></div>
				<div className="absolute w-full h-full inset-0 bg-gradient-to-b from-[#141414] via-[#1414140c] to-mainBlack-1 z-20"></div>
				<div className="wrapper flex items-center gap-[4em]  min-h-[90vh] mt-[8em] xl:mt-[4em]">
					<div className="w-[50%] xl:w-[35%] 2xl:w-[25%]  h-full z-50">
						<Image
							src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
							width={500}
							height={500}
							alt={data.title}
							className="object-cover rounded-xl w-full h-full"
						/>
					</div>
					<div className="flex flex-col gap-6 z-50 w-[60%] ">
						<div className="flex flex-col gap-1">
							<span className="text-xl text-mainPink-1 font-extrabold uppercase">
								{searchParams.type}
							</span>
							<h1 className="2lg:text-4xl xl:text-5xl font-bold">
								{data.title}
							</h1>
							<div className="flex items-center gap-4 text-slate-300 text-xl mt-2">
								<p>{data.tagline}</p>
								<div className="w-[1px] h-[15px] bg-slate-400"></div>
								<p>{data.release_date}</p>
								<div className="w-[1px] h-[15px] bg-slate-400"></div>
								<p>{data.runtime} min.</p>
								<div className="w-[1px] h-[15px] bg-slate-400"></div>
								{data.spoken_languages.slice(0, 1).map((item) => {
									return <p key={item.name}>{item.name}</p>;
								})}
							</div>
							<div className="flex items-center mt-[1em] gap-4">
								{data.genres.map((genre) => {
									return (
										<p
											key={genre.id}
											className="bg-gray-500 px-6 py-1 rounded-xl">
											{genre.name}
										</p>
									);
								})}
							</div>
						</div>
						<div className="flex gap-12">
							<div className="flex flex-col gap-1">
								<p className="text-slate-300 font-medium">IMDb RATING</p>
								<p className="flex items-center gap-2">
									<Image
										src={imdbIcon}
										height={50}
										width={50}
										alt="imdb"
										className="size-4 xs:size-5 md:size-6"
									/>
									<p className="flex items-center text-xl font-semibold">
										{data.vote_average.toFixed(1)}

										<span className="font-light text-lg italic">/ 10</span>
									</p>
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-slate-300 font-medium">YOUR RATING</p>
								<button className="2lg:hover:text-yellow-600 transition-all 2lg:hover:underline flex items-center gap-1 text-xl text-yellow-400">
									<FaRegStar className="text-2xl" />
									Add Rating
								</button>
							</div>
							<div className="flex flex-col ga-1">
								<p className="text-slate-300 font-medium">POPULARITY</p>
								<p className="flex items-center gap-1 font-medium text-xl">
									<IoIosPeople className="text-green-500 text-3xl" />
									{Math.round(data.popularity)}
								</p>
							</div>
							<CircularProgress
								percentage={percentage}
								userRating={data.vote_count}
							/>
						</div>
						<div className="flex gap-3 xs:gap-4 md:gap-6 mt-[1em]">
							<button className="main_btn flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-4 md:py-3  md:text-lg font-semibold">
								<FaCirclePlay className="text-2xl" />
								Watch Trailer
							</button>
							<button className="flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-4 md:py-3 md:text-lg font-semibold glassmorphism_white rounded-xl hover:bg-slate-300 hover:text-mainBlack-1 transition-colors">
								<CiBookmark className="text-2xl" />
								Add to Watchlist
							</button>
						</div>
						<div className="flex flex-col gap-6 mt-[1em]">
							<p className="text-lg mt-1">{data.overview}</p>
							<div className="flex flex-wrap gap-10 ">
								{crew.slice(0, 6).map((item) => {
									return (
										<div className="flex flex-col" key={item.id}>
											<p className="text-xl font-medium">{item.name}</p>
											<p className="text-slate-300 -mt-1">{item.job}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailsHeader;
