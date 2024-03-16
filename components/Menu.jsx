"use client";

import { GoHomeFill } from "react-icons/go";
import { AiFillDribbbleCircle, AiFillVideoCamera } from "react-icons/ai";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { CiSettings, CiLogin, CiHeart } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { IoEyeOutline, IoHelpCircleOutline } from "react-icons/io5";
import { SlCompass } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFilm } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

const Menu = () => {
	const pathname = usePathname();

	return (
		<>
			<div className="hidden sticky top-0 w-64 h-screen 2lg:flex flex-col justify-between p-6 bg-mainLightBlack border-r-[1px] border-gray-800">
				<div className="flex flex-col font-light">
					<Link href="/" className="flex items-center gap-2">
						<FaFilm className="p-2 bg-mainPink text-4xl rounded-lg" />
						<p className="text-xl font-medium">MovieCine</p>
					</Link>
					<p className="text-md text-[#777] mb-6 mt-10">Menu</p>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink transition-colors mb-6 ${
							pathname === "/" ? "active" : ""
						}`}>
						<GoHomeFill className="text-2xl" />
						<p className="text-lg">Home</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/discover" ? "active" : ""
						}`}>
						<SlCompass className="text-2xl" />
						<p className="text-lg">Discover</p>
					</Link>
					<p className="text-md text-[#777] mb-6 mt-10">Library</p>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/coming-soon" ? "active" : ""
						}`}>
						<GoClock className="text-2xl" />
						<p className="text-lg">Coming Soon</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/top-rated" ? "active" : ""
						}`}>
						<IoIosStarOutline className="text-2xl" />
						<p className="text-lg">Top Rated</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/liked" ? "active" : ""
						}`}>
						<CiHeart className="text-2xl" />
						<p className="text-lg">Liked</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/popular" ? "active" : ""
						}`}>
						<IoEyeOutline className="text-2xl" />
						<p className="text-lg">Popular</p>
					</Link>

					<p className="text-md text-[#777] mb-6 mt-10">General</p>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/settings" ? "active" : ""
						}`}>
						<CiSettings className="text-2xl" />
						<p className="text-lg">Settings</p>
					</Link>
					<Link
						href="/"
						className={`flex items-center gap-2 hover:text-mainPink  hover:border-r-2 hover:border-mainPink  transition-colors mb-6 ${
							pathname === "/help" ? "active" : ""
						}`}>
						<IoHelpCircleOutline className="text-2xl" />
						<p className="text-lg">Help</p>
					</Link>
				</div>

				<p className="flex items-center gap-2 text-lg font-light hover:text-mainPink cursor-pointer">
					<CiLogin className="text-2xl" />
					Log Out
				</p>
			</div>
			<div className="fixed bottom-0 left-0 px-3 py-5 flex items-center justify-between md:justify-center md:gap-20 bg-mainLightBlack w-full 2lg:hidden z-50">
				<Link
					href="/"
					className={`flex flex-col items-center gap-1 text-gray-400  ${
						pathname === "/" ? "mobile-active" : ""
					}`}>
					<GoHomeFill className="text-2xl md:text-3xl" />
					<p className="text-sm md:text-base">Home</p>
				</Link>
				<Link
					href="/discover"
					className={`flex flex-col items-center gap-1 text-gray-400 ${
						pathname === "/discover" ? "mobile-active" : ""
					}`}>
					<AiFillDribbbleCircle className="text-2xl  md:text-3xl" />
					<p className="text-sm md:text-base">Discover</p>
				</Link>
				<Link
					href="/popular"
					className={`flex flex-col items-center gap-1 text-gray-400  ${
						pathname === "/popular" ? "mobile-active" : ""
					}`}>
					<AiFillVideoCamera className="text-2xl  md:text-3xl" />
					<p className="text-sm md:text-base">Popular</p>
				</Link>
				<div
					className={`flex flex-col items-center gap-1 text-gray-400  ${
						pathname === "/popular" ? "mobile-active" : ""
					}`}>
					<RiAccountPinBoxFill className="text-2xl text-mainPink  md:text-3xl" />
					<p className="text-sm md:text-base">Account</p>
				</div>
			</div>
		</>
	);
};

export default Menu;
