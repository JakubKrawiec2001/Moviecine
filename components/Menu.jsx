"use client";

import { GoHomeFill } from "react-icons/go";
import { AiFillDribbbleCircle, AiFillVideoCamera } from "react-icons/ai";
import { FaCalendarCheck, FaStar, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Genres from "./Genres";

const Menu = () => {
	const pathname = usePathname();

	return (
		<>
			<div className="hidden fixed top-32 w-64 h-fit md:flex flex-col gap-20 justify-between p-6 bg-mainLightBlack rounded-[30px]">
				<div className="flex flex-col gap-8">
					<p className="text-md text-[#777]">Menu</p>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange transition-colors ${
							pathname === "/" ? "active" : ""
						}`}>
						<GoHomeFill className="text-3xl" />
						<p className="text-lg mt-1">Home</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange transition-colors ${
							pathname === "/discover" ? "active" : ""
						}`}>
						<AiFillDribbbleCircle className="text-3xl" />
						<p className="text-lg mt-1">Discover</p>-
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange transition-colors ${
							pathname === "/coming-soon" ? "active" : ""
						}`}>
						<FaCalendarCheck className="text-2xl" />
						<p className="text-lg mt-1">Coming Soon</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange transition-colors ${
							pathname === "/top-rated" ? "active" : ""
						}`}>
						<FaStar className="text-2xl" />
						<p className="text-lg mt-1">Top Rated</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainOrange hover:border-r-2 hover:border-mainOrange transition-colors ${
							pathname === "/popular" ? "active" : ""
						}`}>
						<AiFillVideoCamera className="text-2xl" />
						<p className="text-lg mt-1">Popular</p>
					</Link>
				</div>

				<div className="flex flex-col gap-4">
					<p className="text-md text-[#777]">Genres</p>
					<Genres></Genres>
					<p className="text-mainOrange cursor-pointer hover:text-white transition-colors">
						See All
					</p>
				</div>
				<p className="flex items-center gap-2 text-lg">
					<FaSignOutAlt />
					Log Out
				</p>
			</div>
			<div className="fixed bottom-0 left-0 bg-mainLightBlack w-full h-20 md:hidden">
				
			</div>
		</>
	);
};

export default Menu;
