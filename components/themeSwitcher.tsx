import useThemeOnMounted from "@/hooks/useThemeOnMounted";
import SunIcon from "@/data/sun.svg";
import MoonIcon from "@/data/moon.svg";

const ThemeSwitcher = () => {
  const { mounted, theme, setTheme, resolvedTheme } = useThemeOnMounted();
  return (
    <button
      aria-label="Toggle between dark and light mode"
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
