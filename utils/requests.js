const options = {
	headers: {
		accept: "application/json",
		Authorization: process.env.TMDB_AUTH_KEY,
	},
};

export const getAllMovies = async () => {
	const res = await fetch(
		"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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
