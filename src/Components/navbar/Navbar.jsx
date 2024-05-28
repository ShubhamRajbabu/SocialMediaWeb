import React, { useContext } from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOulinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AppContext";

const Navbar = () => {
  const { currUser, toggledTheme, theme } = useContext(AuthContext);
  console.log(currUser);
  return (
    <div className="navbar" style={{theme}}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialApp</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeOutlinedIcon className="home-icon"/>
        </Link>
        {theme === "dark-theme" ? (
          <DarkModeOutlinedIcon onClick={toggledTheme} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggledTheme} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOulinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currUser.profilePic} alt="user" />
          <span>{currUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
