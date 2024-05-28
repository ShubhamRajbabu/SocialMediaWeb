import "./share.scss";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useContext } from "react";
import { AuthContext } from "../../context/AppContext";

const Share = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currUser.profilePic} alt="profilePic" />
          <input
            type="text"
            placeholder={`What's on your mind ${currUser.name}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <AddPhotoAlternateIcon />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <MyLocationIcon />
              <span>Add Place</span>
            </div>
            <div className="item">
              <PersonAddIcon />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
