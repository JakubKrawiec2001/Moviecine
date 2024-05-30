import Hero from "@/components/Hero";
import {
	getMovieById,
	getNowPlayingMovies,
	getPopularMovies,
} from "@/lib/tmdb";

export default async function Home() {
	const popularMovies = await getPopularMovies();
	const nowPlayingMovies = await getNowPlayingMovies();

	return (
		<>
			<Hero movies={nowPlayingMovies} />
		</>
	);
}
