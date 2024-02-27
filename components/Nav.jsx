"use client";

import Link from "next/link";
import { FaFilm } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoIosCloseCircle, IoIosArrowDown } from "react-icons/io";

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="sticky top-0 flex items-center justify-between  w-full p-5  bg-mainLightBlack">
			<Link href="/" className="flex items-center gap-2 2lg:hidden">
				<FaFilm className="p-2 bg-mainPink text-4xl rounded-lg" />
				<p className="text-xl font-medium">MovieCine</p>
			</Link>
			<div className="hidden 2lg:flex gap-10 ml-10 font-light">
				<Link
					href="/movies"
					className="text-lg hover:text-mainPink transition-colors">
					Movies
				</Link>
				<Link
					href="/series"
					className="text-lg hover:text-mainPink transition-colors">
					Series
				</Link>
				<Link
					href="/tv-shows"
					className="text-lg hover:text-mainPink transition-colors">
					TV Shows
				</Link>
				<Link
					href="/"
					className="text-lg hover:text-mainPink transition-colors">
					Kids
				</Link>
			</div>
			<div className="flex items-center sm:gap-6">
				<div className="flex sm:border-2 border-[#4a4a4a] rounded-full px-4 py-2">
					<input
						type="search"
						name=""
						id=""
						placeholder="Search everything"
						className="hidden sm:block bg-transparent focus:outline-none placeholder-[#656565]"
					/>
					<HiMagnifyingGlass className="text-3xl" />
				</div>
				<CiHeart className="hidden sm:block text-4xl"></CiHeart>
				<div className="hidden 2lg:flex items-center gap-1 dropdown dropdown-hover">
					<IoIosArrowDown className="text-2xl order-1" />
					<div
						tabIndex={0}
						role="button"
						className="w-12 h-12 rounded-full bg-mainPink"></div>
					<ul
						tabIndex={0}
						className="dropdown-content top-12 right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<a>Account</a>
						</li>
						<li>
							<a>My List</a>
						</li>
						<li>
							<a>Log out</a>
						</li>
					</ul>
				</div>

				<IoIosMenu
					className="text-5xl 2lg:hidden"
					onClick={() => setOpen((prev) => !prev)}
				/>
			</div>
			<div
				className={`fixed inset-0 w-full h-screen flex flex-col justify-center items-center gap-4 bg-black transition-all ${
					open ? "top-0 opacity-100" : "top-96 opacity-0"
				}`}>
				<IoIosCloseCircle
					className="absolute text-4xl text-white top-5 right-5"
					onClick={() => setOpen(false)}
				/>
			</div>
		</nav>
	);
};

export default Nav;
