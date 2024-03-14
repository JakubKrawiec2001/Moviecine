const Genres = ({ genres }) => {
	return (
		<>
			<div className="hidden 2xl:flex gap-2 mt-6">
				{genres.slice(0, 10).map((item) => {
					return (
						<button
							key={item.id}
							className="py-2 px-6 flex-1 2xl:text-sm 3xl:text-base rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainPink hover:border-mainPink transition-colors">
							{item.name}
						</button>
					);
				})}
			</div>
			<div className="hidden 2lg:flex 2xl:hidden gap-2 mt-6">
				{genres.slice(0, 7).map((item) => {
					return (
						<button
							key={item.id}
							className="py-2 px-6 flex-1 text-sm xl:text-base rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainPink hover:border-mainPink transition-colors">
							{item.name}
						</button>
					);
				})}
			</div>
		</>
	);
};

export default Genres;
