"use client";

import { useDarkMode, useMounted } from "@/src/hooks";
import { Button } from "@nextui-org/react";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

const ThemeSwitcher = () => {
	const isMounted = useMounted();
	const { handleChangeTheme, theme } = useDarkMode();

	if (!isMounted) return null;

	return (
		<Button
			onClick={handleChangeTheme}
			className="fixed bottom-5 right-5"
			isIconOnly
			disableRipple
			radius="sm"
			variant="flat"
		>
			{theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
		</Button>
	);
};

export default ThemeSwitcher;
