import FeaturedCarousel from "@/components/FeaturedCarousel";
import Hero from "@/components/Hero";
import MovieCarousel from "@/components/MovieCarousel";
import StreamingProvidersList from "@/components/StreamingProvidersList";
import Top10Carousel from "@/components/Top10Carousel";
import { getLoggedInUser } from "@/lib/actions/user.actions";
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
  const [
    popularMovies,
    popularSeries,
    nowPlayingMovies,
    nowTrendingAll,
    getMovieGenres,
    getSeriesGenres,
    featuredMovies,
    recommendedSeries,
    upcomingMovies,
    onAirSeries,
    streamingProviders,
    user,
  ] = await Promise.all([
    getPopularMovies("movie", 1),
    getPopularMovies("tv", 1),
    getNowPlayingMovies(),
    getAllTrending(),
    getGenres("movie"),
    getGenres("tv"),
    getDiscoveredMovies(2, "movie"),
    getDiscoveredMovies(2, "tv"),
    getUpcomingMovies(),
    getOnTheAirSeries(),
    getStreamingProviders("movie"),
    getLoggedInUser(),
  ]);

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
        <FeaturedCarousel
          data={featuredMovies}
          genres={getMovieGenres}
          user={user}
        />
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
