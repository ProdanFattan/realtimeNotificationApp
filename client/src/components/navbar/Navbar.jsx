import React from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} className="iconImg" alt="" />
          <div className="counter">2</div>
          {/* {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )} */}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Message} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Settings} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
      </div>
      {open && (
        <div className="notifications">
          {/* {notifications.map((n) => displayNotification(n))} */}
          {/* <button className="nButton">Mark as read</button> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
