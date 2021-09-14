import { Visibility } from '@material-ui/icons';
import React from 'react'
import './widgetright.css'


export const WidgetRight = () => {
    return (
        <div className="widgetright">
             <span className="widgetRtTitle">New User</span>
            <ul className="widgetRtList">
                <li className="widgetRtListItem">
                    <img src="" alt="" className="widgetRtImg" />
                    <div className="widgetRtUser">
                        <span className="widgetRtUsername"> Vevi </span>
                        <span className="widgetRtUserTitle">Developer</span>
                    </div>
                    <buttton className="widgetRtButton">
                        <Visibility className="widgetIcon"/>
                        Show
                    </buttton>
                </li>
                <li className="widgetRtListItem">
                    <img src="" alt="" className="widgetRtImg" />
                    <div className="widgetRtUser">
                        <span className="widgetRtUsername"> Vevi </span>
                        <span className="widgetRtUserTitle">Developer</span>
                    </div>
                    <buttton className="widgetRtButton">
                        <Visibility  className="widgetIcon"/>
                        Show
                    </buttton>
                </li>
                <li className="widgetRtListItem">
                    <img src="" alt="" className="widgetRtImg" />
                    <div className="widgetRtUser">
                        <span className="widgetRtUsername"> Vevi </span>
                        <span className="widgetRtUserTitle">Developer</span>
                    </div>
                    <buttton className="widgetRtButton">
                        <Visibility className="widgetIcon"/>
                        Show
                    </buttton>
                </li>
                <li className="widgetRtListItem">
                    <img src="" alt="" className="widgetRtImg" />
                    <div className="widgetRtUser">
                        <span className="widgetRtUsername"> Vevi </span>
                        <span className="widgetRtUserTitle">Developer</span>
                    </div>
                    <buttton className="widgetRtButton">
                        <Visibility className="widgetIcon" />
                        Show
                    </buttton>
                </li>
            </ul>
        </div>
    )
}

export  default WidgetRight;
