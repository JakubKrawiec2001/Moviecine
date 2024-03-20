import { getMovieDetails } from "@/utils/requests";

const Details = async ({ params }) => {
	const id = params.id;
	const detail = await getMovieDetails(id);

	return (
		<div>
			<p>{detail.title}</p>
		</div>
	);
};

export default Details;
