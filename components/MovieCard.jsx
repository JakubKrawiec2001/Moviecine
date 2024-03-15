import Image from "next/image";

const MovieCard = ({ item }) => {
	return (
		<Image
			src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
			alt="Carousel"
			key={item.id}
			width={300}
			height={150}
			className="pr-4 h-[300px]"
		/>
	);
};

export default MovieCard;
