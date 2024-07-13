import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="mt-[4em] md:mt-[6em] wrapper gap-8 pb-12 flex flex-col md:flex-row items-center justify-between">
			<div className="flex items-center gap-5 text-2xl">
				<FaXTwitter />
				<FaFacebookF />
				<FaInstagram />
				<FaTiktok />
			</div>
			<div className="flex flex-col items-center md:items-end gap-4">
				<p className="text-lg text-center">
					@ 2024 Moviecine, All rights reserved
				</p>
				<div className="flex flex-wrap justify-center items-center gap-4 2lg:gap-8 text-xl font-light">
					<Link
						href="/"
						className="2lg:hover:text-mainPink-1 transition-colors">
						Home
					</Link>
					<Link
						href="/"
						className="2lg:hover:text-mainPink-1 transition-colors">
						Movies
					</Link>
					<Link
						href="/"
						className="2lg:hover:text-mainPink-1 transition-colors">
						Tv Shows
					</Link>
					<Link
						href="/"
						className="2lg:hover:text-mainPink-1 transition-colors">
						Watchlist
					</Link>
					<Link
						href="/"
						className="2lg:hover:text-mainPink-1 transition-colors">
						My Reviews
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
