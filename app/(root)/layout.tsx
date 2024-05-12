export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="text-white">
			NAVBAR
			<main>{children}</main>
		</div>
	);
}
