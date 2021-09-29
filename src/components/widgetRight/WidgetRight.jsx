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
                        // token: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDQ5M2QwMzU3YmU3MTNlOGRkYmYzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjgyODAxOCwiZXhwIjoxNjMzNDMyODE4fQ.etC7tqly5DhYE5vt-YsdWV4Y3Usl-l-NBNBVgXUpsfI"
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
