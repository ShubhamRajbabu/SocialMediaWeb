import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrUser({
      id: 1,
      name: "Shubham",
      profilePic:
        "https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
