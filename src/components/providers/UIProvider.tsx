"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const UIProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider className="bg-lay-secondary min-h-screen text-white">
			<NextThemesProvider attribute="class" enableSystem>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
};

export default UIProvider;
