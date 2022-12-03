import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { Link, Route, Routes } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <IconButton>
      <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      
      <Link to="/">
      <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG6.png" alt="tinder logo" />
      
      </Link>
      

      <Link to="/chat">
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
      </Link>
      
      
    </div>
  )
}

export default Header
