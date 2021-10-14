import React, { useState, useContext } from 'react';
import './createproduct.css';
import storage from '../../firebase';
import { createMovies } from '../../context/movieContext/movieApiCalls';
import {MovieContext} from '../../context/movieContext/MovieContext';

const CreateProducts = () => {
    const [ movie , setMovie] = useState(null);
    const [ img, setImg] = useState(null);
    const [ imgTitle, setImgTitle] = useState(null);
    const [ imgSm, setImgSm] = useState(null);
    const [ thriller, setThriller] = useState(null);
    const [ video, setVideo] = useState(null);
    const [ uploaded, setUploaded] = useState(0);

    // dispatch context
    const {dispatch} = useContext(MovieContext);

    
    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value});
    }
   
    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 10;
                console.log("upload is " + progress + "% done.");
            },
            (err) => { 
                console.log(err)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    setMovie((prev) => {
                        return { ...prev, [item.label]: url };
                    });
                     setUploaded((prev) => prev + 1);
                });
              }
            );
        });
    }

// handle all the files properties(input)
    const  handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: thriller, label: "thriller" },
            { file: video, label: "video" },
        ]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createMovies(movie, dispatch)
      }


     return (
        <div className="createproduct">
             <h1 className="addProdctTitle">New Movies</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>image</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImg(e.target.files[0])} id="img" name="img"/>
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImgTitle(e.target.files[0])}  id="imgTitle" name="imgTitle" />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail image</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImgSm(e.target.files[0])}  id="imgSm" name="imgSm" />
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
                    <input type="text" onChange={handleChange}    placeholder="limit" />
                </div>
                <div className="addProductItem">
                    <label>Thriller</label>
                    <input type="file" style={{cursor: "pointer"}} onChange={e=>setThriller(e.target.files[0])}  placeholder="thriller" name="thriller" />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" style={{cursor: "pointer"}} onChange={e=>setVideo(e.target.files[0])}  placeholder="video" name="video" />
                </div>
                <div className="addProductItem">
                    <label>Series?</label>
                    <select  onChange={handleChange} name="isSeries" id="isSeries">
                        <option value="false">no</option>
                        <option value="true">yes</option>
                    </select>
                    {uploaded === 5 ? (
                            <button className="addProductBtn" onClick={handleSubmit}>Create</button>
                        ) : (
                            <button className="addProductBtn" onClick={handleUpload}>Upload</button>
                        )}
                </div>
            </form>
        </div>
    )
}
export default CreateProducts;