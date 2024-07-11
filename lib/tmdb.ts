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
	const data = await response.json();

	return data;
}

export const getMovieById = async (id: string, type: string) => {
	const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
	const data = await fetchDataFromTMDB(url);
	return data;
};

export const getPopularMovies = async (type: string) => {
	const url = `https://api.themoviedb.org/3/${type}/popular?page=1`;
	const data = await fetchDataFromTMDB(url);
	return data.results;
};
export const getNowPlayingMovies = async () => {
	const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
	const data = await fetchDataFromTMDB(url);
	return data.results;
};
export const getDiscoveredMovies = async (page: number, type: string) => {
	const url = `https://api.themoviedb.org/3/discover/${type}?page=${page}&sort_by=popularity.desc`;
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
