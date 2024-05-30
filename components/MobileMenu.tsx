import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { mobileLinks } from "@/constansts";
import { logoutUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { User } from "@/types";
import Image from "next/image";

const MobileMenu = ({ user }: { user: User }) => {
	const { name, email } = user;
	const router = useRouter();

	const handleLogOut = async () => {
		const loggedOut = await logoutUser();
		if (loggedOut) router.push("/sign-in");
	};

	return (
		<div className="block xl:hidden">
			<Sheet>
				<SheetTrigger className="flex items-center justify-center">
					<IoMenu className="text-white text-4xl xs:text-[2.8rem]" />
				</SheetTrigger>
				<SheetContent className="bg-mainBlack-2 text-white flex flex-col justify-between">
					<div className="flex items-center gap-2">
						<div className="flex items-center justify-center size-12 rounded-full bg-mainPink-2">
							<p className="text-2xl font-bold">{name.slice(0, 1)}</p>
						</div>
						<div className="flex flex-col">
							<p className="text-white font-semibold">{name}</p>
							<p className="text-slate-300 text-sm">{email}</p>
						</div>
					</div>
					<SheetClose asChild>
						<div className="flex flex-col gap-8">
							{mobileLinks.map((item) => {
								return (
									<Link
										href={item.path}
										key={item.id}
										className="flex items-center gap-6 text-slate-300 text-xl">
										<Image
											src={item.icon}
											width={30}
											height={30}
											alt={item.label}
										/>
										{item.label}
									</Link>
								);
							})}
						</div>
					</SheetClose>
					<SheetClose
						asChild
						className="text-white flex items-center gap-6 border-t-[1px] border-slate-500 pt-6">
						<p className="text-lg" onClick={handleLogOut}>
							<CiLogout className="text-2xl" /> Log out
						</p>
					</SheetClose>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
