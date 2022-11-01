import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Header() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

const handleSignOut = () => {
  signOut(auth).then(() => {
    dispatch(logout())
  })
  
};

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret"/>
      </div>
      <div className="header__right">
        <IconButton>
        <AppsIcon />
        </IconButton>
        <IconButton>
        <NotificationsIcon />
        </IconButton>
        <Avatar onClick={handleSignOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
