import React, { useState } from "react";
import "./postdata.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import Share from "../share/Share";

const PostData = ({ post }) => {
  const likePost = false;
  const [commentOpen, setCommentOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const handleClick = () => {
    setCommentOpen(!commentOpen);
    setShareOpen(false);
  };
  const handleShareOpen = () => {
    setShareOpen(!shareOpen);
    setCommentOpen(false);

  };

  return (
    <div className="postdata">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="profile" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name"> {post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {likePost ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            12 Likes
          </div>
          <div className="item">
            <TextsmsOutlinedIcon onClick={handleClick} />
            20 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon onClick={handleShareOpen} />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
        {shareOpen && <Share />}
      </div>
    </div>
  );
};

export default PostData;
