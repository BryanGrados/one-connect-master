import { useTheme } from "next-themes";

export const useDarkMode = () => {
	const { setTheme, theme } = useTheme();

	const handleChangeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return {
		theme,
		handleChangeTheme,
	};
};
