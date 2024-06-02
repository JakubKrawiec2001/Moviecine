import { GenreInterface, MovieInterface } from "@/types";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCirclePlay } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import imdbIcon from "@/public/icons/imdb.svg";

type Props = {
	genres: GenreInterface[];
	movies: MovieInterface[];
};

const Hero = ({ movies, genres }: Props) => {
	return (
		<Carousel>
			<CarouselContent className="h-screen">
				{movies.slice(2, 7).map((movie) => {
					return (
						<CarouselItem key={movie.id} className="relative">
							<div className="hero_gradient"></div>
							<Image
								src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
								width={1920}
								height={1080}
								alt={movie.title}
								className="h-full object-cover"
							/>
							<div className="wrapper absolute bottom-[20%] z-20">
								<h1 className="text-6xl font-bold">{movie.title}</h1>
								<p className="text-xl text-slate-200 max-w-[40%] line-clamp-3 font-light mt-6">
									{movie.overview}
								</p>
								<div className="flex items-center gap-4 mt-6">
									{genres.map((item) => {
										if (movie.genre_ids.includes(item.id)) {
											return (
												<p
													key={item.id}
													className="border-[2px] border-slate-300 px-4 py-2 text-sm rounded-xl font-semibold">
													{item.name}
												</p>
											);
										}
									})}
								</div>
								<div className="flex items-center gap-8 mt-6">
									<div className="flex items-center gap-2">
										<Image
											src={imdbIcon}
											height={50}
											width={50}
											alt="imdb"
											className="size-6"
										/>
										<p className="text-xl font-semibold">
											{movie.vote_average.toFixed(1)}
											&nbsp;
											<span className="font-light text-base italic">/ 10</span>
										</p>
									</div>
									<p className="flex items-center gap-2 text-lg underline hover:text-mainPink-2 transition-colors cursor-pointer">
										Read More
										<FaLongArrowAltRight />
									</p>
								</div>
								<div className="flex gap-6  mt-12">
									<button className="main_btn flex items-center gap-3 px-6 py-4 text-xl font-semibold">
										<FaCirclePlay className="text-2xl" />
										Trailer
									</button>
									<button className="flex items-center gap-3 px-6 py-4 text-xl font-semibold glassmorphism_white rounded-xl hover:bg-slate-300 hover:text-mainBlack-1 transition-colors">
										<IoIosAddCircleOutline className="text-3xl" />
										Watchlist
									</button>
								</div>
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<div className="absolute bottom-24 right-48 w-[50px]">
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	);
};

export default Hero;
