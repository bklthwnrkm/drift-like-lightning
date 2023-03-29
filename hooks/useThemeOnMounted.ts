import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useThemeOnMounted = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return { mounted, theme, setTheme, resolvedTheme };
};

export default useThemeOnMounted;
