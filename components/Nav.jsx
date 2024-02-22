import Link from "next/link";
import { FaFilm } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

const Nav = () => {
	return (
		<nav className="sticky top-5 flex items-center bg-mainLightBlack p-5 rounded-[30px]">
			<div className="flex items-center justify-between w-full">
				<Link href="/" className="flex items-center gap-2">
					<FaFilm className="p-2 bg-mainOrange text-4xl rounded-lg" />
					<p className="text-xl font-medium">MovieCine</p>
				</Link>
				<div className="hidden xl:flex gap-10">
					<Link
						href="/movies"
						className="text-lg hover:text-mainOrange transition-colors">
						Movies
					</Link>
					<Link
						href="/series"
						className="text-lg hover:text-mainOrange transition-colors">
						Series
					</Link>
					<Link
						href="/tv-shows"
						className="text-lg hover:text-mainOrange transition-colors">
						TV Shows
					</Link>
					<Link
						href="/"
						className="text-lg hover:text-mainOrange transition-colors">
						Kids
					</Link>
				</div>
				<div className="flex items-center gap-6">
					<div className="hidden md:flex border-2 border-[#4a4a4a] rounded-full px-4 py-2">
						<input
							type="search"
							name=""
							id=""
							placeholder="Search everything"
							className="bg-transparent focus:outline-none placeholder-[#656565]"
						/>
						<HiMagnifyingGlass className="text-3xl" />
					</div>
					<CiHeart className="hidden md:block text-4xl"></CiHeart>
					<div className="hidden lg:block dropdown dropdown-hover">
						<div
							tabIndex={0}
							role="button"
							className="w-12 h-12 rounded-full bg-mainOrange"></div>
						<ul
							tabIndex={0}
							className="dropdown-content right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
					<IoIosMenu className="text-4xl lg:hidden" />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
