export default async function Home() {
	return <div className="bg-mainLightBlack w-full p-5 rounded-[30px]"></div>;
}

// {movies.results.map((movie) => {
// 	return (
// 		<>
// 			<Image
// 				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
// 				width={500}
// 				height={500}
// 				alt="Movie poster"></Image>
// 			<p key={movie.title}>{movie.title}</p>
// 		</>
// 	);
// })}
