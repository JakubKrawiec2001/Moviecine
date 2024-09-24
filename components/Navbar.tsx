"use client";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import { navLinks } from "@/constansts/index";
import Link from "next/link";
import { User } from "@/types";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import AvatarMenu from "./AvatarMenu";

const Navbar = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const handleOpenSearchInput = () => {
    setOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full py-3 xs:py-4 md:py-6 z-50 ${
        scroll ? "bg-[#1c1d21f3]" : ""
      }`}
    >
      <div className="px-4 md:px-6 lg:px-8 2xl:px-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 md:gap-2">
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
        </Link>
        <div className="hidden xl:flex gap-12 text-white text-lg">
          {navLinks.map((item, i) => {
            const { path, label } = item;
            const isActive =
              pathname === item.path || pathname.startsWith(`${item.path}/`);
            return (
              <Link
                href={path}
                key={i}
                className={cn(
                  "text-slate-300 text-lg hover:text-mainPink-1 transition-colors",
                  {
                    "text-white": isActive,
                  }
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <SearchInput />
          <AvatarMenu user={user} />
          <MobileMenu user={user} />
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <FaSearch
            className="lg:hidden text-2xl xs:text-[1.6rem]"
            onClick={handleOpenSearchInput}
          />
          {open && (
            <div
              className={cn(
                "flex justify-between items-center bg-mainBlack-2 fixed -top-[100%] left-0 min-h-[10vh] w-full p-4 transition-all",
                { "top-0": open }
              )}
            >
              <SearchInput />
              <IoIosCloseCircle
                className="text-white text-3xl xs:text-4xl"
                onClick={handleOpenSearchInput}
              />
            </div>
          )}
          <MobileMenu user={user} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
