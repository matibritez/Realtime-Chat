import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chats";
import "../styles.scss";


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>  
    </div>
  )
}
export default Home