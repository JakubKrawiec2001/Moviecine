import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenreInterface } from "@/types";
import { IoIosArrowDown } from "react-icons/io";

const GenresDropdownMenu = ({ genres }: { genres: GenreInterface[] }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="text-lg flex items-center gap-1 hover:text-mainPink-2 transition-colors outline-none">
				Genres <IoIosArrowDown />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel className="text-white font-semibold">
					Select Genre
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{genres.map((genre) => {
					return (
						<DropdownMenuItem key={genre.id} className="text-slate-300">
							{genre.name}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default GenresDropdownMenu;
