import LoadMore from "@/components/LoadMore";
import MovieCard from "@/components/MovieCard";
import { getAllData } from "@/utils/requests";
import Image from "next/image";

const All = async ({ params }) => {
	const type =
		(params.type === "movies" && "movie") || (params.type === "series" && "tv");

	const data = await getAllData(type, "1");

	return (
		<div className="flex flex-wrap justify-center gap-4 p-6">
			{data.results.map((item) => {
				return (
					<div key={item.id}>
						<Image
							src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
							alt={item.title}
							width={200}
							height={100}
						/>
						<p className="text-md line-clamp-1 w-1/2">
							{item.title}
							{item.name}
						</p>
						{/* <MovieCard item={item} /> */}
					</div>
				);
			})}
			<LoadMore type={type} />
		</div>
	);
};

export default All;
