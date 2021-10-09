import React from 'react'
import "./product.css";
import { Link } from 'react-router-dom';
import Chart from '../../components/ReadChart/Chart';
import {productData } from "../../centralData";
import { Publish } from '@material-ui/icons';

 const Products = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <hi className="productTitle">Product</hi>
                <Link to="/createproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopeLeft">
                    <Chart data={productData } dataKey="Sales" title="Sale Activies" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="" className="productInfoImg" alt="" />
                        <span className="productName">Power Bank</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className=   "productInfoKey">id:</span>
                            <span className="productInfoKey">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales</span>
                            <span className="productInfoValue">$341</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active</span>
                            <span className="productInfoKey">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Stock</span>
                            <span className="productInfoKey">maybe</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productButton">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Name</label>
                        <input type="text" placeholder="" />
                        <label> Stock </label>
                        <select name="stock" id="StockID">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="" className="uploadImg" alt="" />
                            <label for="">
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