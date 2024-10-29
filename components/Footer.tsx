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
      <p className="text-lg text-center">
        @ {currentYear} Moviecine, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
