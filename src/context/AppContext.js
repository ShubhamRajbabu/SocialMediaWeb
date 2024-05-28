import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || 'light-theme'
  );
  const toggledTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  const login = () => {
    setCurrUser({
      id: 1,
      name: "Shubham",
      profilePic:
        "https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75",
    });
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("user", JSON.stringify(currUser));
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [currUser, theme]);

  return (
    <AuthContext.Provider value={{ currUser, login, toggledTheme, theme }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
