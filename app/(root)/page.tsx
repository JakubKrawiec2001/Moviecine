import Hero from "@/components/Hero";
import { getGenres, getNowPlayingMovies } from "@/lib/tmdb";

export default async function Home() {
	// const popularMovies = await getPopularMovies();
	const nowPlayingMovies = await getNowPlayingMovies();
	const genres = await getGenres();

	return (
		<>
			<Hero movies={nowPlayingMovies} genres={genres} />
			<p className="text-4xl">HELLO</p>
		</>
	);
}
