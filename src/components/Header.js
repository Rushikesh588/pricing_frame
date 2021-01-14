import React from "react";
import "../css/header.css";
import Button from "@material-ui/core/Button";

function Header(props) {
  return (
    <div className="header">
      <h4>{props.name}</h4>
      <h5>
        <span>$</span>
        {props.price}
      </h5>
      <p>per user, per month</p>
      <Button variant="outlined" className="header_button">
        {props.tag}
      </Button>
    </div>
  );
}

export default Header;
