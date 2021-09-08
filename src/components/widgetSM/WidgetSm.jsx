import { Visibility } from '@material-ui/icons';
import React from 'react'
import './widgetSm.css'


const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New User</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="" alt="" className="src" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername"> Seun </span>
                        <span className="widgetSmUserTitle">Developer</span>
                    </div>
                    <buttton className="widgetSmButton">
                        <Visibility />
                        Show
                    </buttton>
                </li>
            </ul>
        </div>
    )
}

export  default WidgetSm;