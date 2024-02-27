"use client";

import { useEffect, useState } from "react";

const Genres = () => {
	const [genres, setGenres] = useState([]);
	const getGenres = async () => {
		const res = await fetch(
			"https://api.themoviedb.org/3/genre/movie/list?language=en",
			{
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmExMDk3YTEzYmFkOGViZjE4MDE5OTJiMTk2YWNjNSIsInN1YiI6IjY1ZDc5YmY3Nzk4ZTA2MDE4OTZkNDBmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UkCCAOIxz1JGQ_waNaysGcImvuF2l4KLyIvxsLWMG6U",
				},
			}
		);
		const data = await res.json();
		setGenres(data.genres);
	};

	useEffect(() => {
		getGenres();
	}, []);

	return (
		<div className="flex flex-wrap gap-2">
			{genres.slice(0, 5).map((item) => {
				return (
					<p
						key={item.id}
						className="py-1 px-2 text-sm rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainPink transition-colors">
						{item.name}
					</p>
				);
			})}
			<p className="mt-2 text-md text-[#777]">+14 more</p>
		</div>
	);
};

export default Genres;
