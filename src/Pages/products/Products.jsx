import React, {useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { productRows} from '../../centralData'
import { Link } from 'react-router-dom';
import "./product.css";


const Product = () => {
    const [ data, setData ] = useState(productRows)

    const handleDelete = (id)=> {
        setData(data.filter(item=> item.id !== id ));
    }

    const colums = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'product', 
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div  className="productList">
                        <img src={params.row.img} alt="" className="avater" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'stock', 
            headerName: 'Stock',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/product/'+params.row.id}>
                        <button className="editProduct">Edit</button>
                        <DeleteOutline className="deleteProduct" onClick={()=> handleDelete(params.row.id)}/>
                    </Link>
                    </>
                )
            }
        },
    ];

    return (
        <div className="product">
            <DataGrid rows={data} 
                disableSelectionOnClick
                columns={colums} 
                pageSize={10}
                checkboxSelection 
            /> 
        </div>
    )
}

export default Product;