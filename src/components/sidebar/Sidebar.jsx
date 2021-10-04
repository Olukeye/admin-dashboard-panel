import React from 'react'
import "./sidebar.css"
import {
    AttachMoneyOutlined,
    BarChartRounded,
    ChatBubbleOutline,
    DynamicFeed, 
    GroupOutlined,
    LineStyle,
    MailOutlined,
    Report,
    PlayCircleOutline ,
    Timeline, TrendingUp, WorkOutline
    } from '@material-ui/icons'
import { Link } from 'react-router-dom'



 const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboatd</h3>
                    <ul className="sidebarList">
                        <Link to="/"  className="links">
                        <li className="sidebarListItem active"> 
                        <LineStyle  className="sidebarIcon"/> Home
                        </li>
                        </Link>
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
                       <Link to="/users" className="links">
                       <li className="sidebarListItem"> 
                        <GroupOutlined  className="sidebarIcon"/> Users
                      </li>
                       </Link>
                       <Link to="/products"  className="links">
                       <li className="sidebarListItem"> 
                        <PlayCircleOutline className="sidebarIcon"/> Movies
                        </li>
                       </Link>
                        <li className="sidebarListItem"> 
                        <AttachMoneyOutlined className="sidebarIcon" /> Transactions
                        </li>
                        <li className="sidebarListItem"> 
                        <BarChartRounded className="sidebarIcon" /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem"> 
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
                        <li className="sidebarListItem"> 
                        <WorkOutline  className="sidebarIcon"/> Manage
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
