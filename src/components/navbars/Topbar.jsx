import React from 'react';
import "./topbar.css";
import {  NotificationsNone, Language, Settings } from "@material-ui/icons";


const Topbar = () => {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
               <div className="left">
                   <span className="logo">ADMIN</span>
               </div>
               <div className="right">
                  <div className="iconContainer">
                  <NotificationsNone/>
                   <span className="topIconBadge">2</span>
                  </div>
                  <div className="iconContainer">
                  <Language />
                   <span className="topIconBadge">2</span>
                  </div>
                  <div className="iconContainer">
                  <Settings />
                  </div>
               </div>
           </div>
        </div>
    )
}
export default Topbar;