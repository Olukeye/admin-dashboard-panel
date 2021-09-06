import React from 'react'
import "./sidebar.css"
import {
     ChatBubbleOutline, DynamicFeed, LineStyle, MailOutlined,
     Report,
     Timeline, TrendingUp, WorkOutline
    } from '@material-ui/icons'

 const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboatd</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active"> 
                        <LineStyle  className="sidebarIcon"/> Home
                        </li>
                        <li className="sidebarListItem"> 
                        <Timeline className="sidebarIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem"> 
                        <TrendingUp className="sidebarIcon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active"> 
                        <LineStyle  className="sidebarIcon"/> Home
                        </li>
                        <li className="sidebarListItem"> 
                        <Timeline className="sidebarIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem"> 
                        <TrendingUp className="sidebarIcon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active"> 
                        <MailOutlined  className="sidebarIcon"/> Mail
                        </li>
                        <li className="sidebarListItem"> 
                        <DynamicFeed className="sidebarIcon" /> Feedback
                        </li>
                        <li className="sidebarListItem"> 
                        <ChatBubbleOutline className="sidebarIcon" /> Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Satff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active"> 
                        <WorkOutline  className="sidebarIcon"/> Manager
                        </li>
                        <li className="sidebarListItem"> 
                        <Timeline className="sidebarIcon" /> Analytics
                        </li>
                        <li className="sidebarListItem"> 
                        <Report className="sidebarIcon" /> Reports
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar; 
