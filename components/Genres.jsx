const Genres = () => {
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
