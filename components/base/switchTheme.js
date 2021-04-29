import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export default function switchTheme() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
useEffect(() => {
    setIsMounted(true);
  }, []);
const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
return (
  <a className="author-avatar" onClick={switchTheme} >
    <i className="gg-sun"></i>
  </a>
  );
}