import useThemeOnMounted from "@/hooks/useThemeOnMounted";
import SunIcon from "@/data/sun.svg";
import MoonIcon from "@/data/moon.svg";
import { themeToggleButtonData } from "@/data/translation/translateData";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";

const ThemeSwitcher = () => {
  const { mounted, theme, setTheme, resolvedTheme } = useThemeOnMounted();
  const { localizedData } = useLocalizedDataFetcher(themeToggleButtonData);

  return (
    <button
      aria-label={localizedData}
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  );
};

export default ThemeSwitcher;
