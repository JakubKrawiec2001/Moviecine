import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GenreInterface } from "@/types";

const GenresDropdownMenu = ({ genres }: { genres: GenreInterface[] }) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<p className="text-lg 2lg:hover:text-mainPink-1 transition-colors">
							Genres
						</p>
					</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-mainBlack-3 rounded-xl h-[60vh] overflow-y-scroll top-4 -left-[6em] shadow-lg custom_genres_scrollbar">
						<p className="text-white bg-mainBlack-3 w-full font-semibold text-lg sticky top-0 px-8 py-2 border-b-[1px] border-slate-700">
							Select Genre
						</p>
						<div className="flex flex-col gap-4 mt-4 px-8 pb-4">
							{genres.map((genre) => {
								return (
									<NavigationMenuLink
										key={genre.id}
										className="text-slate-300 text-lg 2lg:hover:text-white transition-colors cursor-pointer">
										{genre.name}
									</NavigationMenuLink>
								);
							})}
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default GenresDropdownMenu;
