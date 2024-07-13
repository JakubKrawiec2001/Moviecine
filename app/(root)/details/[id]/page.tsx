import ReviewPopup from "@/components/ReviewPopup";
import { getLoggedInUser, getReviews } from "@/lib/actions/user.actions";
import { getCrew, getMovieById } from "@/lib/tmdb";
import { MovieDetailsInterface, ReviewType } from "@/types";
import DetailsHeader from "@/components/DetailsHeader";

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

	const crew = await getCrew(searchParams.type, itemId);

	return (
		<div>
			<DetailsHeader
				data={movieDetails}
				searchParams={searchParams}
				crew={crew}
			/>
			<div className="wrapper"></div>
			{/* <ReviewPopup movieId={itemId} user={user} /> */}
		</div>
	);
};

export default page;
