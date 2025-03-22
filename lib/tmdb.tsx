"use server";

async function fetchDataFromTMDB(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export const getMovieById = async (id: string, type: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
  const data = await fetchDataFromTMDB(url);
  return data;
};

export const getCast = async (type: string, id: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/credits`;
  const data = await fetchDataFromTMDB(url);
  return data.cast;
};
export const getCrew = async (type: string, id: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/credits`;
  const data = await fetchDataFromTMDB(url);
  return data.crew;
};
export const getSimilar = async (type: string, id: number) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/similar?page=1`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getUserReviews = async (type: string, id: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/reviews?page=1`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getWatchProviders = async (type: string, id: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/watch/providers`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getVideos = async (type: string, id: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/videos`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getImages = async (type: string, id: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/images`;
  const data = await fetchDataFromTMDB(url);
  return data.backdrops;
};

export const getPopularMovies = async (type: string, page: number) => {
  const url = `https://api.themoviedb.org/3/${type}/popular?${page}`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getUpcomingMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?page=1`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getOnTheAirSeries = async () => {
  const url = `https://api.themoviedb.org/3/tv/on_the_air?page=1`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getNowPlayingMovies = async () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
export const getDiscoveredMovies = async (
  page: number,
  type: string,
  genreId?: string | undefined
) => {
  let url = "";
  if (genreId) {
    url = `https://api.themoviedb.org/3/discover/${type}?page=${page}&sort_by=popularity${
      genreId != "featured" ? `&with_genres=${genreId}.desc` : ``
    }`;
  } else {
    url = `https://api.themoviedb.org/3/discover/${type}?page=${page}&sort_by=popularity`;
  }

  const data = await fetchDataFromTMDB(url);
  return data.results;
};

export const getAllTrending = async () => {
  const url = "https://api.themoviedb.org/3/trending/all/day";
  const data = await fetchDataFromTMDB(url);
  return data.results;
};

export const getGenres = async (type: string) => {
  const url = `https://api.themoviedb.org/3/genre/${type}/list`;
  const data = await fetchDataFromTMDB(url);
  return data.genres;
};
export const getStreamingProviders = async (type: string) => {
  const url = `https://api.themoviedb.org/3/watch/providers/${type}`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};

export const getSearchMovies = async (term: string) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${term}`;
  const data = await fetchDataFromTMDB(url);
  return data.results;
};
