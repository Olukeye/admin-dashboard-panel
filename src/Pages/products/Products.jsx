import React from 'react'
import "./product.css";
import { Link , useLocation } from 'react-router-dom';
import { Publish } from '@material-ui/icons';

 const Products = () => {
     const location = useLocation();
     const movie = location.movie;
    return (
        <div className="product">
            <div className="productTitleContainer">
                <hi className="productTitle">Movie:</hi>
                <Link to="/createproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
              
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img}  alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoKey">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoKey">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit</span>
                            <span className="productInfoKey">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productButton">
                <form  className="productForm">
                    <div className="productFormLeft">
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
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} className="uploadImg" alt="" />
                            <label>
                                <Publish />
                            </label>
                            <input type="file" style={{display:"blue"}} id="file" />
                        </div>
                        <button className="productButton">update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Products;