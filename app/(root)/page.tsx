import FeaturedCarousel from "@/components/FeaturedCarousel";
import Hero from "@/components/Hero";
import MovieCarousel from "@/components/MovieCarousel";
import Top10Carousel from "@/components/Top10Carousel";
import {
	getAllTrending,
	getDiscoveredMovies,
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
	const featuredMovies = await getDiscoveredMovies(2, "movie");

	return (
		<>
			<Hero movies={nowPlayingMovies} genres={getMovieGenres} />
			<div className="flex flex-col gap-10 md:gap-20 wrapper  md:mt-12 select-none">
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
				<FeaturedCarousel data={featuredMovies} genres={getMovieGenres} />
			</div>
		</>
	);
}
