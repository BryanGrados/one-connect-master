const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<div className="h-16 border-b shadow-small sticky bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
				<div className="container h-full flex items-center justify-center">Header Content</div>
			</div>
			{children}
		</main>
	);
};

export default DashboradLayout;
