import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
          @ {currentYear} Moviecine, All rights reserved
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 2lg:gap-8 text-xl font-light">
          <p>Home</p>
          <p>Movies</p>
          <p>Tv Shows</p>
          <p>Watchlist</p>
          <p>My Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
