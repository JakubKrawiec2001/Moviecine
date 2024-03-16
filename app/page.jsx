import Carousel from "@/components/Carousel";
import Genres from "@/components/Genres";
import Hero from "@/components/Hero";
import MovieCard from "@/components/MovieCard";
import SectionHeading from "@/components/SectionHeading";
import {
	getGenres,
	getMovieByGenres,
	getMovieDetails,
	getMovieImages,
	getNowPlayingMovies,
	getPopularMovies,
	getTopRatedMovies,
	getUpcomingMovies,
} from "@/utils/requests";

export default async function Home() {
	const id = "438631";
	const comedy = "35";
	const drama = "18";
	const action = "28";
	const upcomingMoviesPage = "1";
	const newMoviesPage = "2";
	const movieDetail = await getMovieDetails(id);
	const movieImages = await getMovieImages(id);
	const popularMovies = await getPopularMovies("1");
	const criticallyAcclaimedMovies = await getPopularMovies("2");
	const recommendedMovies = await getPopularMovies("3");
	const nowPlayingMovies = await getNowPlayingMovies();
	const topRatedMovies = await getTopRatedMovies();
	const comedyMovies = await getMovieByGenres(comedy);
	const dramaMovies = await getMovieByGenres(drama);
	const actionMovies = await getMovieByGenres(action);
	const upcomingMovies = await getUpcomingMovies(upcomingMoviesPage);
	const newMovies = await getUpcomingMovies(newMoviesPage);
	const genres = await getGenres();

	return (
		<div className="p-2 md:p-6">
			<Hero
				movieDetail={movieDetail}
				movieImages={movieImages.backdrops}></Hero>
			<Genres genres={genres.genres}></Genres>
			<main className="mt-4 md:mt-8">
				<SectionHeading>{"Popular"}</SectionHeading>
				<Carousel data={popularMovies.results}></Carousel>
				<SectionHeading>{"Now playing"}</SectionHeading>
				<Carousel data={nowPlayingMovies.results}></Carousel>
				<SectionHeading>{"Top rated"}</SectionHeading>
				<Carousel data={topRatedMovies.results}></Carousel>
				<SectionHeading>{"Popular comedy movies"}</SectionHeading>
				<Carousel data={comedyMovies.results}></Carousel>
				<SectionHeading>{"Upcoming"}</SectionHeading>
				<Carousel data={upcomingMovies.results}></Carousel>
				<SectionHeading>{"New movies"}</SectionHeading>
				<Carousel data={newMovies.results}></Carousel>
				<SectionHeading>{"Popular drama movies"}</SectionHeading>
				<Carousel data={dramaMovies.results}></Carousel>
				<SectionHeading>{"Critically acclaimed"}</SectionHeading>
				<Carousel data={criticallyAcclaimedMovies.results}></Carousel>
				<SectionHeading>{"Recommended for you"}</SectionHeading>
				<Carousel data={recommendedMovies.results}></Carousel>
				<SectionHeading>{"Popular action movies"}</SectionHeading>
				<Carousel data={actionMovies.results}></Carousel>
			</main>
		</div>
	);
}
