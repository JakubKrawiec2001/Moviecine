import ReviewPopup from "@/components/ReviewPopup";
import { getLoggedInUser, getReviews } from "@/lib/actions/user.actions";
import { getMovieById } from "@/lib/tmdb";
import { MovieDetailsInterface, ReviewType } from "@/types";

type ReviewTypeProps = {
	documents: ReviewType[];
};

const page = async ({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { type: string };
}) => {
	const user = await getLoggedInUser();

	const { id: itemId } = params;

	const reviews: ReviewTypeProps = await getReviews(user.$id);
	const movieDetails: MovieDetailsInterface = await getMovieById(
		itemId,
		searchParams.type
	);
	const {
		adult,
		backdrop_path,
		belongs_to_collection,
		budget,
		genres,
		homepage,
		id,
		imdb_id,
		origin_country,
		original_language,
		original_title,
		overview,
		popularity,
		poster_path,
		production_companies,
		title,
		video,
		vote_average,
		vote_count,
		original_name,
		media_type,
		number_of_seasons,
	} = movieDetails;
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<p>{id}</p>

			<h1 className="text-5xl text-mainPink-1">
				{searchParams.type === "movie" ? title : original_name}
			</h1>
			<p>{searchParams.type === "tv" && number_of_seasons}</p>
			<ReviewPopup movieId={itemId} user={user} />
			<div className="flex flex-col gap-8 text-white text-4xl">
				{reviews.documents.map((item, i) => {
					if (item.movie_id === itemId) {
						return (
							<div key={i}>
								<p>{item.rating}</p>
								<p>{item.description}</p>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default page;
