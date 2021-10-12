import React from 'react';
import './createproduct.css';
import { useState } from 'react';
import storage from '../../firebase';

const CreateProducts = () => {
    const [ movie , setMovie] = useState(null);
    const [ img, setImg] = useState(null);
    const [ imgTitle, setImgTitle] = useState(null);
    const [ imgSm, setImgSm] = useState(null);
    const [ thriller, setThriller] = useState(null);
    const [ video, setVideo] = useState(null);
    const [ upload, setUpload] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name]: value});
    }
   
    const uploading = (items) => {
        items.forEach((item) => {
            const uploadTask = storage.ref(`/items/${item.file.name}`).put(item);
            uploadTask.on("state_changes", (snapshot) => {
                const progress = (snapshot.byteTransfered / snapshot.totaBytes) * 100;
                console.log("loading" + progress + "% done");
            },
            (err) => {
                console.log(err)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    setMovie((prev) => {
                        return {...prev, [item.label]: url };
                    });
                     setUpload((prev) => prev + 1);
                });
              }
            );
        });
    }

// handle all the files properties(input)
    const handleUpload = (e) => {
        e.preventDefault();
        uploading ([
            {file: img, label: "img"},
            {file: imgTitle, label: "imgTitle"},
            {file: imgSm, label: "imgSm"},
            {file: thriller, label: "thriller"},
            {file: video, label: "video"},
        ])
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
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImgTitle(e.target.files[0])}  id="imgTitle" name="imgTitle" />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail image</label>
                    <input type ="file" style={{cursor: "pointer"}} onChange={e=>setImgSm(e.target.files[0])}  id="thumbImg" name="imgSm" />
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
                    <input type="file" style={{cursor: "pointer"}} onChange={e=>setThriller(e.target.files[0])}  placeholder="thriller" name="thriller" />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" style={{cursor: "pointer"}} onChange={e=>setVideo(e.target.files[0])}  placeholder="video" name="video" />
                </div>
                <div className="addProductItem">
                    <label>Series?</label>
                    <select  name="active" onChange={handleChange}  id="active">
                        <option value="false">no</option>
                        <option value="true">yes</option>
                    </select>
                    {upload ===5 ? (
                            <button className="addProductBtn">Create</button>
                        ) : (
                            <button className="addProductBtn" onClick={handleUpload}>Upload</button>
                        )}
                </div>
            </form>
        </div>
    )
}
export default CreateProducts;