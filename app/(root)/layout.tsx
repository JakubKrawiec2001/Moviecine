import Navbar from "@/components/Navbar";
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
			<Navbar user={user} />

			<main>{children}</main>
		</div>
	);
}
