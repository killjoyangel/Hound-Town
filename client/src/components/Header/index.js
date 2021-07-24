import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
   
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header_logo"
        src="https://seeklogo.com/images/T/tinder-logo-6451FE2578-seeklogo.com.png"
        alt=""
      />
<IconButton>
<ForumIcon fontSize="large" className="header_icon" />
</IconButton>

    </div>
  );
}

export default Header;
