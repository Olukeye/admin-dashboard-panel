import axios from "axios";
import  {
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
// export const createMovies = async ( movie, dispatch ) => {
//     dispatch(createMovieStart());
//     try{
//         const res = await axios.post("/movie", movie, {
//             headers: { 
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
//             },
//         });
//         dispatch(createMovieSuccess(res.data));
//     } catch(err) {
//         dispatch(createMovieFailed());
//     }
// };



// Delete Movies 
export const deleteList = async ( id, dispatch ) => {
    dispatch(deleteListStart());
    try{
        await axios.delete("/list/" + id, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch(err) {
        dispatch(deleteListFailed());
    }
};


