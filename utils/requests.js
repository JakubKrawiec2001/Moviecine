const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: process.env.TMDB_AUTH_KEY,
	},
};

export const getPopularMovies = async () => {
	const res = await fetch(
		"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
		options
	);
	return res.json();
};

export const getTrendingTvShows = async () => {
	const res = await fetch(
		"https://api.themoviedb.org/3/trending/tv/week?language=en-US",
		options
	);
	return res.json();
};

export const getMovieDetails = async (id) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
		options
	);
	return res.json();
};

export const getMovieImages = async (id) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/images`,
		options
	);
	return res.json();
};

export const getGenres = async () => {
	const res = await fetch(
		`https://api.themoviedb.org/3/genre/movie/list?language=en`,
		options
	);
	return res.json();
};
