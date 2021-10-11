import React from 'react'
import './createproduct.css'
import { useState } from 'react'

const CreateProducts = () => {
    const [ movie , setMovie] = useState(null);
    const [ img, setImg] = useState(null);
    const [ imgTitle, setImgtitle] = useState(null);
    const [ thumbImg, setThumbImg] = useState(null);
    const [ thriller, setThriller] = useState(null);
    const [ video, setVideo] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name]: value});
    }
    console.log(movie)
     return (
        <div className="createproduct">
             <h1 className="addProdctTitle">New Movies</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>image</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImg(e.target.files[0])} id="image" name="img"/>
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImgtitle(e.target.files[1])}  id="imgTitle" name="imgTitle" />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail image</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setThumbImg(e.target.files[2])}  id="thumbImg" name="thumbImg" />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="movie title" onChange={handleChange}  name="title" />
                </div>``
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="describe movie" onChange={handleChange}  name="desc" />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="Released year!" onChange={handleChange}  name="year" />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre"onChange={handleChange}   name="genre"/>
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="duration" onChange={handleChange}  name="duration" />
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" onChange={handleChange} onChange={handleChange}   placeholder="limit" />
                </div>
                <div className="addProductItem">
                    <label>Thriller</label>
                    <input type="file" style={{cursor: "pointer"}} onChange={handleChange}  placeholder="thriller" name="thriller" />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" style={{cursor: "pointer"}} onChange={e=>setVideo(e.target.files[2])}  placeholder="video" name="video" />
                </div>
                <div className="addProductItem">
                    <label>Series?</label>
                    <select  name="active" onChange={handleChange}  id="active">
                        <option value="false">no</option>
                        <option value="true">yes</option>
                    </select>
                    <button className="addProductBtn">Create</button>
                </div>
            </form>
        </div>
    )
}
export default CreateProducts;