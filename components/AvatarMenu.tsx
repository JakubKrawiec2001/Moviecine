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
					<NavigationMenuContent className="bg-mainBlack-3 min-w-[200px] min-h-[200px] rounded-xl top-4 -left-[6em] shadow-lg">
						<NavigationMenuLink>
							<Button className="main_btn text-white" onClick={handleLogOut}>
								Logout
							</Button>
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default AvatarMenu;
