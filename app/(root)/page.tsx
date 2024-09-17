import FeaturedCarousel from "@/components/FeaturedCarousel";
import Hero from "@/components/Hero";
import MovieCarousel from "@/components/MovieCarousel";
import StreamingProvidersList from "@/components/StreamingProvidersList";
import Top10Carousel from "@/components/Top10Carousel";
import {
  getAllTrending,
  getDiscoveredMovies,
  getGenres,
  getNowPlayingMovies,
  getOnTheAirSeries,
  getPopularMovies,
  getStreamingProviders,
  getUpcomingMovies,
} from "@/lib/tmdb";

export default async function Home() {
  const popularMovies = await getPopularMovies("movie", 1);
  const popularSeries = await getPopularMovies("tv", 1);
  const nowPlayingMovies = await getNowPlayingMovies();
  const nowTrendingAll = await getAllTrending();
  const getMovieGenres = await getGenres("movie");
  const getSeriesGenres = await getGenres("tv");
  const featuredMovies = await getDiscoveredMovies(2, "movie");
  const recommendedSeries = await getDiscoveredMovies(2, "tv");
  const upcomingMovies = await getUpcomingMovies();
  const onAirSeries = await getOnTheAirSeries();
  const streamingProviders = await getStreamingProviders("movie");
  return (
    <>
      <Hero movies={nowPlayingMovies} genres={getMovieGenres} />
      <div className="flex flex-col gap-10 md:gap-20 wrapper md:mt-12 select-none">
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
        <MovieCarousel
          type="all"
          label="Best Upcoming Movies"
          data={upcomingMovies}
          genres={getMovieGenres}
        />
        <MovieCarousel
          type="all"
          label="Long Awaited Series"
          data={onAirSeries}
          genres={getSeriesGenres}
        />
        <MovieCarousel
          type="all"
          label="Recommended TV"
          data={recommendedSeries}
          genres={getSeriesGenres}
        />
        <StreamingProvidersList data={streamingProviders} />
      </div>
    </>
  );
}
