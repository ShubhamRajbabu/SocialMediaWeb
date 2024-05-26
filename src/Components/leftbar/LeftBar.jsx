import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faUsers,
  faStore,
  faVideo,
  faCalendarAlt,
  faGamepad,
  faImages,
  faEnvelope,
  faHandHoldingHeart,
  faChalkboardTeacher,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import "./leftbar.scss";
import { AuthContext } from "../../context/AppContext";

const LeftBar = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="left-bar">
      <div className="user">
        <img
          src={currUser.profilePic}
          alt="user"
        />
        <h4 style={{ color: "black", marginTop: 10}}>{currUser.name}</h4>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faUserFriends} />
        <span>Friends</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faUsers} />
        <span>Groups</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faStore} />
        <span>Marketplace</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faVideo} />
        <span>Watch</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faImages} />
        <span>Memories</span>
      </div>

      <hr />
      {/* Second part of the left bar */}
      <h4 style={{ color: "blue", marginTop: 10 }}>Your Shortcuts</h4>
      <div className="folder">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>Events</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faGamepad} />
        <span>Gaming</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faImages} />
        <span>Gallery</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faVideo} />
        <span>Videos</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Messages</span>
      </div>

      <hr />
      {/* Third part of the left bar */}
      <h4 style={{ color: "blue", marginTop: 10 }}>Others</h4>
      <div className="folder">
        <FontAwesomeIcon icon={faHandHoldingHeart} />
        <span>Fundraiser</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        <span>Tutorials</span>
      </div>
      <div className="folder">
        <FontAwesomeIcon icon={faGraduationCap} />
        <span>Courses</span>
      </div>
    </div>
  );
};

export default LeftBar;
