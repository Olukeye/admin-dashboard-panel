import React from 'react'
import './createproduct.css'

const CreateProducts = () => {
    return (
        <div className="createproduct">
             <h1 className="addProdctTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>image</label>
                    <input type ="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Power Bank" />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="544" />
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select  name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    <button className="addProductBtn">Create</button>
                </div>
            </form>
        </div>
    )
}
export default CreateProducts;