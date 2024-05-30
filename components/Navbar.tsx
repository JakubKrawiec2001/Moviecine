"use client";

import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import { navLinks } from "@/constansts/index";
import Link from "next/link";
import { User } from "@/types";
import SearchInput from "./SearchInput";
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { cn } from "@/lib/utils";

const Navbar = ({ user }: { user: User }) => {
	const { name } = user;
	const [open, setOpen] = useState(false);

	const handleOpenSearchInput = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className="wrapper flex justify-between items-center py-3 xs:py-4 md:py-6">
			<div className="flex items-center gap-1 md:gap-2">
				<Image
					src={logo}
					width={40}
					height={40}
					alt="Movicine Logo"
					className="size-[35px] md:size-[40px]"
				/>
				<p className="text-white text-xl xs:text-2xl font-semibold">
					Moviecine
				</p>
			</div>
			<div className="hidden xl:flex gap-12 text-white text-lg">
				{navLinks.map((item, i) => {
					const { path, label } = item;
					return (
						<Link href={path} key={i}>
							{label}
						</Link>
					);
				})}
			</div>
			<div
				className={cn(
					"flex justify-between items-center bg-mainBlack-2 fixed -top-[100%] left-0 min-h-[10vh] w-full p-4 transition-all",
					{ "top-0": open }
				)}>
				<input
					type="search"
					className="bg-transparent xs:text-xl outline-none"
					placeholder="Search ..."
				/>
				<IoIosCloseCircle
					className="text-white text-3xl xs:text-4xl"
					onClick={handleOpenSearchInput}
				/>
			</div>

			<div className="hidden lg:flex items-center gap-8">
				<SearchInput />
				<p className="flex items-center gap-1">
					Genres <IoIosArrowDown />
				</p>
				<div className="flex items-center justify-center size-12 rounded-full bg-mainPink-2">
					<p className="text-2xl font-bold">{name.slice(0, 1)}</p>
				</div>
				<MobileMenu user={user}/>
			</div>
			<div className="flex lg:hidden items-center gap-4">
				<FaSearch
					className="2lg:hidden text-2xl xs:text-[1.6rem]"
					onClick={handleOpenSearchInput}
				/>
				<MobileMenu user={user}/>
			</div>
		</div>
	);
};

export default Navbar;
