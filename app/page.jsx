import Hero from "@/components/Hero";
import { getMovieDetails, getMovieImages } from "@/utils/requests";

export default async function Home() {
	const id = "438631";
	const movieDetail = await getMovieDetails(id);
	const movieImages = await getMovieImages(id);

	return (
		<div className="p-6">
			<Hero
				movieDetail={movieDetail}
				movieImages={movieImages.backdrops}></Hero>
		</div>
	);
}
