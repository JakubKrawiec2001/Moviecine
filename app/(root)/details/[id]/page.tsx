import ReviewPopup from "@/components/ReviewPopup";
import { getLoggedInUser, getReviews } from "@/lib/actions/user.actions";
import {
	getCast,
	getCrew,
	getImages,
	getMovieById,
	getUserReviews,
	getVideos,
	getWatchProviders,
} from "@/lib/tmdb";
import {
	CrewMemberType,
	MovieDetailsInterface,
	ReviewType,
	VideoType,
} from "@/types";
import DetailsHeader from "@/components/DetailsHeader";
import AllVideos from "@/components/AllVideos";
import MovieImages from "@/components/MovieImages";
import Cast from "@/components/Cast";
import Crew from "@/components/Crew";
import RightPanel from "@/components/RightPanel";
import UserReviews from "@/components/UserReviews";

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
	const cast = await getCast(searchParams.type, itemId);
	const videos = await getVideos(searchParams.type, itemId);
	const images = await getImages(searchParams.type, itemId);
	const userReviews = await getUserReviews(searchParams.type, itemId);
	const watchProviders = await getWatchProviders(searchParams.type, itemId);
	const director = crew?.find(
		(member: CrewMemberType) => member.job === "Director"
	);
	const writer = crew?.find(
		(member: CrewMemberType) => member.job === "Writer"
	);
	const producer = crew?.find(
		(member: CrewMemberType) => member.job === "Producer"
	);
	const filteredVideos = videos?.filter(
		(video: VideoType) => video.type === "Trailer" || video.type === "Teaser"
	);
	return (
		<div>
			<DetailsHeader
				data={movieDetails}
				searchParams={searchParams}
				crew={crew}
				user={user}
			/>
			<div className="wrapper flex flex-col lg:flex-row gap-16 2lg:gap-28 lg:mt-12 2lg:mt-16 xl:mt-0">
				<div className="flex flex-col gap-8 md:gap-12 lg:gap-16 2lg:w-[70%] order-1 lg:order-0">
					{filteredVideos.length != 0 && <AllVideos videos={filteredVideos} />}
					<MovieImages images={images} />
					<Cast cast={cast} id={params.id} type={searchParams.type} />
					<Crew crew={crew} id={params.id} type={searchParams.type} />
					<UserReviews userReviews={userReviews} />
				</div>
				<RightPanel
					searchParams={searchParams}
					data={movieDetails}
					director={director}
					writer={writer}
					watchProviders={watchProviders?.US}
					producer={producer}
				/>
			</div>
			{/* <ReviewPopup movieId={itemId} user={user} /> */}
		</div>
	);
};

export default page;
