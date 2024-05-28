import { AuthContext } from "../../context/AppContext";
import Posts from "../posts/Posts";
import Stories from "../stories/Stories";
import "./home.scss";
import React, { useContext } from "react";

const Home = () => {
  const {theme} = useContext(AuthContext)
  return (
    <div className="home" style={{theme}}>
      <Stories />
      <Posts/>
    </div>
  );
};

export default Home;
