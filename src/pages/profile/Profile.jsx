import React, { useContext } from "react";
import { AuthContext } from "../../context/AppContext";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../pages/posts/Posts";
import "./profile.scss";

const Profile = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/8431380/pexels-photo-8431380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img src={currUser.profilePic} alt="" className="profilePic" />
        <div className="profileContainer">
          <div className="userInfo">
            <div className="left">
              <a href="http://facebook.com">
                <FacebookOutlinedIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <InstagramIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <TwitterIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <LinkedInIcon fontSize="medium" />
              </a>
              <a href="http://facebook.com">
                <PinterestIcon fontSize="medium" />
              </a>
            </div>
            <div className="center">
              <span>{currUser.name}</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span> USA</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>shubbu.com</span>
                </div>
              </div>
              <button>Follow</button>
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
