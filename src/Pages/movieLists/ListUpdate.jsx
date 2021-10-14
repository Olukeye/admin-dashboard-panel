import React from 'react'
import "./listupdate.css";
import { Link , useLocation } from 'react-router-dom';
import { Publish } from '@material-ui/icons';

 const ListUpdate = () => {
     const location = useLocation();
     const movie = location.movie;
    return (
        <div className="listupdate">
            <div className="updateTitleContainer">
                <hi className="updateTitle">Movie:</hi>
                <Link to="/createupdate">
                    <button className="updateAddButton">Create</button>
                </Link>
            </div>
            <div className="updateTop">
              
                <div className="updateTopRight">
                    <div className="updateInfoTop">
                        <img src={movie.img}  alt="" className="updateInfoImg" />
                        <span className="updateName">{movie.title}</span>
                    </div>
                    <div className="updateInfoBottom">
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">id:</span>
                            <span className="updateInfoKey">{movie._id}</span>
                        </div>
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">Genre:</span>
                            <span className="updateInfoValue">{movie.genre}</span>
                        </div>
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">year:</span>
                            <span className="updateInfoKey">{movie.year}</span>
                        </div>
                        <div className="updateInfoItem">
                            <span className="updateInfoKey">limit</span>
                            <span className="updateInfoKey">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="updon">
                <form  className="updateForm">
                    <div className="updateFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label> Year </label>
                        <input type="text" placeholder={movie.year} />
                        <label> Genre </label>
                        <input type="text" placeholder={movie.genre} />
                        <label> Limit </label>
                        <input type="text" placeholder={movie.limit} />
                        <label> Thriller </label>
                        <input type="file" style={{cursor:"pointer"}} placeholder={movie.Thriller} />
                        <label> Video </label>
                        <input type="file" style={{cursor:"pointer"}} placeholder={movie.video} />
                    </div>
                    <div className="updateFormRight">
                        <div className="updateUpload">
                            <img src={movie.img} className="uploadImg" alt="" />
                            <label>
                                <Publish />
                            </label>
                            <input type="file" style={{display:"blue"}} id="file" />
                        </div>
                        <button className="updateButton">update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListUpdate;