import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await getLoggedInUser();
	if (!user) redirect("/sign-in");

	return (
		<div className="text-white">
			NAVBAR
			<h1>
				Witaj <span className="text-mainPink-1 text-xl">{user.name}</span>
			</h1>
			<main>{children}</main>
		</div>
	);
}
