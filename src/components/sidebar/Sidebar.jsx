import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp} from '@material-ui/icons'

 const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboatd</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListitem"> 
                        <LineStyle /> Home
                        </li>
                        <li className="sidebarListitem"> 
                        <Timeline /> Analytics
                        </li>
                        <li className="sidebarListitem"> 
                        <TrendingUp /> Sales
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar; 
