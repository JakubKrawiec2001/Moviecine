import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await getLoggedInUser();
	if (user) redirect("/");
	return (
		<div className="flex justify-center items-center min-h-screen text-white auth_bg">
			{children}
		</div>
	);
}
