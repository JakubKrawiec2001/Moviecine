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
import Link from "next/link";

type Props = {
	genres: GenreInterface[];
	movies: MovieInterface[];
};

const Hero = ({ movies, genres }: Props) => {
	return (
		<Carousel opts={{ watchDrag: false }} className="select-none">
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
								className="h-full object-cover w-full"
							/>
							<div className="wrapper absolute bottom-[10%] 2lg:bottom-[20%] z-20">
								<h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold">
									{movie.title}
								</h1>
								<p className="text-base xs:text-lg lg:text-xl text-slate-200 xs:max-w-[90%] md:max-w-[80%] 2lg:max-w-[50%] 2xl:max-w-[40%] line-clamp-2 md:line-clamp-3 font-light mt-2 xs:mt-4 md:mt-6">
									{movie.overview}
								</p>
								<div className="hidden md:flex items-center mt-6 gap-4">
									{genres.map((item) => {
										if (movie.genre_ids.includes(item.id)) {
											return (
												<p
													key={item.id}
													className="border-[2px] border-slate-300 px-4 py-2 text-base 2lg:text-lg rounded-xl font-semibold">
													{item.name}
												</p>
											);
										}
									})}
								</div>
								<div className="flex items-center gap-8 mt-3 xs:mt-5 md:mt-7">
									<div className="flex items-center gap-2">
										<Image
											src={imdbIcon}
											height={50}
											width={50}
											alt="imdb"
											className="size-4 xs:size-5 md:size-6"
										/>
										<p className="text-lg xs:text-xl font-semibold">
											{movie.vote_average.toFixed(1)}
											&nbsp;
											<span className="font-light text-sm xs:text-base italic">
												/ 10
											</span>
										</p>
									</div>
									<Link
										href={`/details/${movie.id}?type=movie`}
										className="flex items-center gap-2 text-base xs:text-lg hover:text-mainPink-2 transition-colors cursor-pointer">
										<span className="read_more">Details</span>
										<FaLongArrowAltRight />
									</Link>
								</div>
								<div className="flex gap-3 xs:gap-4 md:gap-6 mt-6 xs:mt-10  md:mt-12">
									<button className="main_btn flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-6 md:py-4 text-base xs:text-lg md:text-xl font-semibold">
										<FaCirclePlay className="text-2xl" />
										Trailer
									</button>
									<button className="flex items-center gap-2 md:gap-3 px-4 py-2 xs:px-5 md:px-6 md:py-4 text-base xs:text-lg md:text-xl font-semibold glassmorphism_white rounded-xl hover:bg-slate-300 hover:text-mainBlack-1 transition-colors">
										<IoIosAddCircleOutline className="text-3xl" />
										Watchlist
									</button>
								</div>
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<div className="hidden md:block absolute bottom-14 lg:bottom-16 2lg:bottom-24 right-20 2lg:right-48 w-[50px]">
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	);
};

export default Hero;
