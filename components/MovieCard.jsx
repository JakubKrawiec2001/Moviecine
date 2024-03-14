import Image from "next/image";

const MovieCard = ({ item }) => {
	return (
		<Image
			src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
			alt="Carousel"
			key={item.id}
			width={200}
			height={150}
            className="p-2"
		/>
	);
};

export default MovieCard;
