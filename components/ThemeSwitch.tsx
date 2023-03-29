// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useThemeOnMounted from "@/hooks/useThemeOnMounted";
import SunIcon from "@/data/sun.svg";
import MoonIcon from "@/data/moon.svg";

const ThemeSwitch = () => {
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
  // return (
  //   <motion.button
  //     aria-label="Toggle between dark and light mode"
  //     className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
  //     onClick={() =>
  //       setTheme(
  //         theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
  //       )
  //     }
  //     whileHover={{
  //       scale: 1.1,
  //       transition: { duration: 0.2 },
  //     }}
  //     whileTap={{
  //       scale: 0.6,
  //       transition: { duration: 0.2 },
  //     }}
  //   >
  //     {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
  //       <FontAwesomeIcon icon={faMoon} size="lg" />
  //     ) : (
  //       <FontAwesomeIcon icon={faSun} size="lg" />
  //     )}
  //   </motion.button>
  // );
};

export default ThemeSwitch;
