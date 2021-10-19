import React, {useContext, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {MovieListContext} from "../../context/movieListContext/MovieListContext";
import { deleteList, getList } from "../../context/movieListContext/MovieListApiCalls";
import { Link } from 'react-router-dom'; 
import "./list.css";


 const Lists = () => {
    //    const [ data, setData ] = useState(listRows)
    const { lists, dispatch } = useContext(MovieListContext);

    useEffect(() => {
        getList(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id, dispatch);
    }
    
    const column = [
        {
            field: '_id',
            headerName: 'ID',
            width: 250
        },
        {
            field: 'title', 
            headerName: 'title',
            width: 250
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 250
        },
        {
            field: 'type',
            headerName: 'type',
            width: 250
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={{pathname:"/list/" + params.row._id, list: params.row}}>
                        <button className="editlist">Edit</button>
                    </Link>
                    <DeleteOutline className="deletelist" onClick={()=> handleDelete(params.row._id)}/>
                    </>
                )
            }
        },
    ];
    return (
          <div className="list">
            <DataGrid rows={lists} 
                disableSelectionOnClick
                columns={column} 
                pageSize={10}
                checkboxSelection 
                getRowId={(r) => r._id}
            /> 
        </div>
    )
}

export default Lists;


