import axios from "axios";
import  {
    createListFailed,
    createListStart,
    createListSuccess,
    deleteListFailed,
    deleteListStart,
    deleteListSuccess,
    getListFailed,
    getListStart, getListSuccess
    } from './MovieListAction';

// get All Movies
export const getList = async ( dispatch ) => {
    dispatch(getListStart());
    try{
        const res = await axios.get("/list", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(getListSuccess(res.data));
    } catch(err) {
        dispatch(getListFailed());
    }
};

// // create movie  
export const createList= async ( list, dispatch ) => {
    dispatch(createListStart());
    try{
        const res = await axios.post("/list", list, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch(err) {
        dispatch(createListFailed());
    }
};

// Delete Movies 
export const deleteList = async ( id, dispatch ) => {
    dispatch(deleteListStart());
    try{
        await axios.delete("/list" + id, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch(err) {
        dispatch(deleteListFailed());
    }
};


