import React, {useContext, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {MovieContext} from "../../context/movieContext/MovieContext";
import { getMovies ,deleteMovies } from "../../context/movieContext/movieApiCalls";
import { Link } from 'react-router-dom'; 
import "./productlist.css";


 const ProductList = () => {
    //    const [ data, setData ] = useState(productRows)
    const { movie, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);
    
 
    const handleDelete = (id)=> {
        deleteMovies(id, dispatch);
    }
    console.log(movie);

    const column = [
        {
            field: '_id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'movies', 
            headerName: 'Movie',
            width: 200,
            renderCell: (params) => {
                return (
                    <div  className="productListImg">
                        <img src={params.row.img} alt="" className="avater" />
                        {params.row.title}
                    </div>
                )
            }
        },
        {
            field: 'genre', 
            headerName: 'Genre',
            width: 120
        },
        {
            field: 'year',
            headerName: 'Year',
            width: 120
        },
        {
            field: 'limit',
            headerName: 'limit',
            width: 120
        },
        {
          field: 'isSeries',
          headerName: 'isSeries',
          width: 120
      },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={{pathname:"/product/" + params.row._id, movie: params.row}}>
                        <button className="editProduct">Edit</button>
                    </Link>
                    <DeleteOutline className="deleteProduct" onClick={()=> handleDelete(params.row._id)}/>
                    </>
                )
            }
        },
    ];
    return (
          <div className="productlist">
            <DataGrid rows={movie} 
                disableSelectionOnClick
                columns={column} 
                pageSize={10}
                checkboxSelection 
                getRowId={(r) => r._id}
            /> 
        </div>
    )
}

export default ProductList;


