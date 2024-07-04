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

export interface SearchResultsInterface {
	page: number;
	results: MovieInterface[];
	total_pages: number;
	total_results: number;
	genres: GenreInterface[];
}

export interface GenreInterface {
	id: number;
	name: string;
}
