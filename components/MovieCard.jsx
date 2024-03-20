import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ item }) => {
	return (
		<Link
			href={`/details/${item.id}`}
			className="group flex flex-col p-1 lg:pr-2 cursor-pointer">
			<Image
				src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
				alt="Carousel"
				key={item.id}
				width={300}
				height={150}
				className="md:h-[250px] lg:h-[300px] group-hover:scale-95 transition-transform"
			/>
			<div className="hidden lg:flex justify-between p-1">
				<p className="text-sm text-white line-clamp-1 group-hover:text-mainPink transition-colors">
					{item.title}
				</p>
				<p className="flex items-center gap-1 text-sm">
					<FaStar className="text-mainPink" />
					{item.vote_average.toFixed(1)}
				</p>
			</div>
		</Link>
	);
};

export default MovieCard;
