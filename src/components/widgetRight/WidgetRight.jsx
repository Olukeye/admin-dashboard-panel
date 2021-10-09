import React, { useState, useEffect } from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetright.css'
import axios from 'axios'


export const WidgetRight = () => {
    const [ newUsers, setNewUsers ] = useState([])
    useEffect(() => {
        const getNewUsers = async() => {
            try{
                const res = await axios.get("/user?new=true", {
                    headers : {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
                    }
                });
                setNewUsers(res.data)
            } catch(err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

    return (
        <div className="widgetright">
             <span className="widgetRtTitle">New User</span>
            <ul className="widgetRtList">
                {newUsers.map((user) => (
                    
                <li className="widgetRtListItem">
                    <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetRtImg" />
                    <div className="widgetRtUser">
                        <span className="widgetRtUsername"> {user.username} </span>
                    </div>
                    <buttton className="widgetRtButton">
                        <Visibility className="widgetIcon"/>
                        Show
                    </buttton>
                </li>
                
                ))}
            </ul>
        </div>
    )
}

export  default WidgetRight;
