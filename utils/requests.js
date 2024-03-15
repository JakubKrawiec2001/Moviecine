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
export const getNowPlayingMovies = async () => {
	const res = await fetch(
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
		options
	);
	return res.json();
};
export const getTopRatedMovies = async () => {
	const res = await fetch(
		"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
