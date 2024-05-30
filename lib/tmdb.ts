import { SearchResultsInterface } from "@/types";

async function fetchDataFromTMDB(url: string, cacheTime?: number) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
		},
		next: {
			revalidate: cacheTime || 60 * 60 * 24,
		},
	};

	const response = await fetch(url, options);
	const data = (await response.json()) as SearchResultsInterface;
	return data;
}

export const getMovieById = async (id: string) => {
	const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
	const data = await fetchDataFromTMDB(url);
	return data;
};

export const getPopularMovies = async () => {
	const url = "https://api.themoviedb.org/3/movie/popular?page=1";
	const data = await fetchDataFromTMDB(url);
	return data.results;
};
export const getNowPlayingMovies = async () => {
	const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
	const data = await fetchDataFromTMDB(url);
	return data.results;
};
