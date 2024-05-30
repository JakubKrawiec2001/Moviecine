import { MovieInterface } from "@/types";
import Image from "next/image";

const Hero = ({ movies }: { movies: MovieInterface[] }) => {
	return (
		<div className="relative h-[80vh]">
			<div className="hero_gradient"></div>
			{movies.slice(0, 1).map((movie) => {
				return (
					<>
						<Image
							src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
							width={1920}
							height={1080}
							alt={movie.title}
							key={movie.id}
							className="h-full object-cover"
						/>
						<div className="wrapper absolute top-[40%] z-20">
							<h1 className="text-6xl font-bold w-[35%]">{movie.title}</h1>
							<p className="text-xl text-slate-200 line-clamp-3 w-[40%] font-light mt-6">
								{movie.overview}
							</p>
							<button className="main_btn p-4 text-xl font-semibold mt-12">
								Watch Trailer
							</button>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Hero;
