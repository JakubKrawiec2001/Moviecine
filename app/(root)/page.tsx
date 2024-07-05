import Hero from "@/components/Hero";
import MovieCarousel from "@/components/MovieCarousel";
import Top10Carousel from "@/components/Top10Carousel";
import {
	getAllTrending,
	getGenres,
	getNowPlayingMovies,
	getPopularMovies,
} from "@/lib/tmdb";

export default async function Home() {
	const popularMovies = await getPopularMovies("movie");
	const popularSeries = await getPopularMovies("tv");
	const nowPlayingMovies = await getNowPlayingMovies();
	const nowTrendingAll = await getAllTrending();
	const getMovieGenres = await getGenres("movie");
	const getSeriesGenres = await getGenres("tv");

	return (
		<>
			<Hero movies={nowPlayingMovies} genres={getMovieGenres} />
			<div className="flex flex-col gap-6 md:gap-14 wrapper  md:mt-12 select-none">
				<MovieCarousel
					type="trending"
					label="Daily Trending"
					data={nowTrendingAll}
					genres={getMovieGenres}
				/>

				<MovieCarousel
					type="all"
					label="Popular Movies"
					data={popularMovies}
					genres={getMovieGenres}
				/>
				<MovieCarousel
					type="all"
					label="Popular Series"
					data={popularSeries}
					genres={getSeriesGenres}
				/>
				<Top10Carousel data={nowPlayingMovies} />
			</div>
		</>
	);
}
