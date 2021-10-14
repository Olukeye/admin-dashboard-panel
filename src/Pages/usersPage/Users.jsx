import React , { useState}  from 'react'
import './users.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { userRows} from '../../centralData'
import { Link } from 'react-router-dom';


 const Users = () => {
    const [ data, setData ] = useState(userRows);
    // const [ users, setUsers ] = useState();
    
    // useEffect(() => {
    //    const geUsers = async() => {
    //        try{
    //         const res = await axios.get("/")
    //        } catch (err) {
    //            console.log(err)
    //        }
    //    };

    // }, [])

    const handleDelete = (id)=> {
        setData(data.filter(item=> item.id !== id ));
        console.log('deleted')
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'user', 
            headerName: 'User',
            width: 250,
            renderCell: (params) => {
                return (
                    <div  className="usersList">
                        <img src={params.row.avater} alt="" className="avater" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email', 
            headerName: 'Email',
            width: 250
        },
        {
            field: 'status',
            headerName: 'status',
            width: 250
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 250
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/user/'+params.row.id}>
                        <button className="editUser">Edit</button>
                        <DeleteOutline className="deleteUser" onClick={()=> handleDelete(params.row.id)}/>
                    </Link>
                    </>
                )
            }
        },
    ];
    return (
        <div className="users">
            <DataGrid rows={data} 
                disableSelectionOnClick
                columns={columns} 
                pageSize={8}
                checkboxSelection 
            /> 
        </div>
    )
}

export default Users;