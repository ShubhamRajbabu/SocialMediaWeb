import React, { useContext } from "react";
import "./rightbar.scss";
import { AuthContext } from "../../context/AppContext";

const Rightbar = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img
                src={currUser.profilePic}
                alt="user"
              />
              <span>{currUser.name}</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>decline</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <span>Shubham</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>decline</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <p><span>Shubham</span> liked the post</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <p><span>Shubham</span> changed the cover photo</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <p><span>Shubham</span> liked the post</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <p><span>Shubham</span> liked the post</p>
            </div>
            <span>1 min ago</span>
          </div>

        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
             <div className="online" />
              <span>Shubham</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <div className="online" />
              <span>Shubham</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <div className="online" />
              <span>Shubham</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://bizee.com/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fbizee-website-assets%2Fblog_top-image_0182.webp&w=3840&q=75"
                alt="user"
              />
              <div className="online" />
              <span>Shubham</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
