"use client";
import { logoutUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const LogOut = () => {
	const router = useRouter();

	const handleLogoutUser = async () => {
		const loggedOutUser = await logoutUser();
		if (loggedOutUser) router.push("/sign-in");
	};
	return (
		<>
			<button className="bg-mainPink-1 p-7 text-xl" onClick={handleLogoutUser}>
				Wyloguj się
			</button>
		</>
	);
};

export default LogOut;
