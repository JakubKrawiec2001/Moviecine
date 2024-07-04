import Navbar from "@/components/Navbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getGenres } from "@/lib/tmdb";
import { redirect } from "next/navigation";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await getLoggedInUser();
	if (!user) redirect("/sign-in");

	const genres = await getGenres("movie");

	return (
		<div className="text-white">
			<Navbar user={user} genres={genres} />
			<main>{children}</main>
		</div>
	);
}
