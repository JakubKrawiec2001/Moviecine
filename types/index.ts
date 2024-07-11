export interface IAuthUserParams {
	username?: string;
	email: string;
	password: string;
	confirmedPassword?: string;
}

export interface User {
	$id: string;
	userId: string;
	name: string;
	email: string;
}

export interface MovieInterface {
	id: number;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	name?: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	media_type?: string;
}

export interface GenreInterface {
	id: number;
	name: string;
}
export interface ProductionCompany {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
export interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}
export interface Creator {
	id: number;
	credit_id: string;
	name: string;
	original_name: string;
	gender: number;
	profile_path: string;
}

export interface Episode {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number | null;
	season_number: number;
	show_id: number;
	still_path: string;
}

export interface Network {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
	vote_average: number;
}

export interface MovieDetailsInterface {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection | null;
	budget: number;
	genres: GenreInterface[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	original_name?: string;
	media_type?: string;
	created_by?: Creator[];
	episode_run_time?: number[];
	first_air_date?: string;
	in_production?: boolean;
	languages?: string[];
	last_air_date?: string;
	last_episode_to_air?: Episode;
	name?: string;
	next_episode_to_air?: Episode;
	networks?: Network[];
	number_of_episodes?: number;
	number_of_seasons?: number;
	seasons?: Season[];
	type?: string;
}

export type ReviewType = {
	email: string;
	userID: string;
	username: string;
	movie_id: string;
	description: string;
	rating: number;
};
