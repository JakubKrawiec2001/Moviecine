import Carousel from "@/components/Carousel";
import Genres from "@/components/Genres";
import Hero from "@/components/Hero";
import MovieCard from "@/components/MovieCard";
import SectionHeading from "@/components/SectionHeading";
import {
	getGenres,
	getMovieDetails,
	getMovieImages,
	getPopularMovies,
} from "@/utils/requests";

export default async function Home() {
	const id = "438631";
	const movieDetail = await getMovieDetails(id);
	const movieImages = await getMovieImages(id);
	const popularMovies = await getPopularMovies();
	const genres = await getGenres();

	return (
		<div className="p-2 md:p-6">
			<Hero
				movieDetail={movieDetail}
				movieImages={movieImages.backdrops}></Hero>
			<Genres genres={genres.genres}></Genres>
			<main className="mt-4 md:mt-8">
				<SectionHeading>{"Popular"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Now playing"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Top rated"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Popular comedy movies"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Upcoming"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"New movies"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Popular drama movies"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Critically acclaimed"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Recommended for you"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
				<SectionHeading>{"Popular action movies"}</SectionHeading>
				<Carousel popularMovies={popularMovies.results}></Carousel>
			</main>
		</div>
	);
}
