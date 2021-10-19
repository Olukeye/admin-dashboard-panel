import React from 'react'
import "./listupdate.css";
import { Link , useLocation } from 'react-router-dom';

 const ListUpdate = () => {
     const location = useLocation();
     const list = location.list;
    return (
        <div className="listupdate">
            <div className="updateTitleContainer">
                <hi className="updateTitle">list:</hi>
                <Link to="/newlist">
                    <button className="updateAddButton">Create</button>
                </Link>
            </div>
            <div className="updateTop">
              
                <div className="updateTopRight">
                    <div className="updateInfoTop">
                    <span className="updateName">Title:</span>
                        <span className="updateName">{list.title}</span>
                    </div>
                    <div className="updateInfoBottom">
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">id:</span>
                            <span className="updateInfoKey">{list._id}</span>
                        </div>
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">Genre:</span>
                            <span className="updateInfoValue">{list.genre}</span>
                        </div>
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">type:</span>
                            <span className="updateInfoKey">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="updon">
                <form  className="updateForm">
                    <div className="updateFormLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={list.title} />
                        <label> Type </label>
                        <input type="text" placeholder={list.type} />
                        <label> Genre </label>
                        <input type="text" placeholder={list.genre} />
                    </div>
                    <div className="updateFormRight">
                        <button className="updateButton">update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListUpdate;