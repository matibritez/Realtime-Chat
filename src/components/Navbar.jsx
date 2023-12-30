import React from "react"
import "../styles.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Mati chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/15031666/pexels-photo-15031666/free-photo-of-nina-camisa-en-pie-retrato.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""></img>
        <span>Mati</span>
        <button>logout</button>
      </div>
    </div>
  )
}
export default Navbar