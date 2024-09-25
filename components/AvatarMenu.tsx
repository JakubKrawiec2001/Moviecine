import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";
import { logoutUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { User } from "@/types";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";

const AvatarMenu = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutUser();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center justify-center size-10 rounded-xl bg-mainPink-2 2lg:hover:bg-mainPink-1 transition-colors text-xl font-bold">
              {user.name.slice(0, 1)}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-mainBlack-3 min-w-[200px] min-h-[100px] rounded-xl top-4 -left-[6em] shadow-lg p-6 flex flex-col gap-4">
            <NavigationMenuLink>
              <Link
                href="/reviews"
                className="border-l-[3px] md:text-lg  border-mainPink-1 pl-2 hover:text-slate-300 transition-colors"
              >
                Your Rating
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                href="/watchlist"
                className="border-l-[3px] md:text-lg  border-mainPink-1 pl-2 hover:text-slate-300 transition-colors"
              >
                Your Watchlist
              </Link>
            </NavigationMenuLink>

            <div className="h-[3px] w-full bg-mainBlack-2" />
            <NavigationMenuLink>
              <button
                onClick={handleLogOut}
                className="flex items-center gap-1 group"
              >
                <CiLogout className="text-xl xs:text-2xl group-hover:text-mainPink-2 transition-colors" />
                <p className="md:text-lg group-hover:text-mainPink-2 transition-colors">
                  Log out
                </p>
              </button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AvatarMenu;
