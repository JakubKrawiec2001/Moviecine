import { GoHomeFill } from "react-icons/go";
import { AiFillDribbbleCircle, AiFillVideoCamera } from "react-icons/ai";
import { FaCalendarCheck, FaStar, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
const Menu = () => {
	return (
		<div className="fixed top-32 w-64 h-[85vh] flex flex-col justify-between p-6 bg-mainLightBlack rounded-[30px]">
			<div className="flex flex-col gap-8">
				<p className="text-md text-[#777]">Menu</p>
				<Link
					href="/"
					className="flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange transition-colors">
					<GoHomeFill className="text-3xl" />
					<p className="text-lg mt-1">Home</p>
				</Link>
				<Link
					href="/"
					className="flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange  transition-colors">
					<AiFillDribbbleCircle className="text-3xl" />
					<p className="text-lg mt-1">Discover</p>
				</Link>
				<Link
					href="/"
					className="flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange  transition-colors">
					<FaCalendarCheck className="text-2xl" />
					<p className="text-lg mt-1">Coming Soon</p>
				</Link>
				<Link
					href="/"
					className="flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange  transition-colors">
					<FaStar className="text-2xl" />
					<p className="text-lg mt-1">Top Rated</p>
				</Link>
				<Link
					href="/"
					className="flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange  transition-colors">
					<AiFillVideoCamera className="text-2xl" />
					<p className="text-lg mt-1">Popular</p>
				</Link>
			</div>

			<div className="flex flex-col gap-4">
				<p className="text-md text-[#777]">Genres</p>
				<div className="flex flex-wrap gap-2">
					<p className="py-1 px-2 text-sm rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainOrange transition-colors">
						Action
					</p>
					<p className="py-1 px-2 text-sm rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainOrange transition-colors">
						Drama
					</p>
					<p className="py-1 px-2 text-sm rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainOrange transition-colors">
						Western
					</p>
					<p className="py-1 px-2 text-sm rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainOrange transition-colors">
						Si-fi
					</p>
					<p className="py-1 px-2 text-sm rounded-full border-2 border-[#4a4a4a] cursor-pointer hover:bg-mainOrange transition-colors">
						Comedy
					</p>

					<p className="mt-2 text-md text-[#777]">+25 more</p>
				</div>
				<p className="text-mainOrange cursor-pointer hover:text-white transition-colors">
					See All
				</p>
			</div>
			<p className="flex items-center gap-2 text-lg">
				<FaSignOutAlt />
				Log Out
			</p>
		</div>
	);
};

export default Menu;
