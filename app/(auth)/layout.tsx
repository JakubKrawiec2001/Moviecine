export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex justify-center items-center min-h-screen text-white auth_bg">
			{children}
		</div>
	);
}
