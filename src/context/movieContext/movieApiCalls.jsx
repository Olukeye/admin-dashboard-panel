import axios from "axios";
import  {
    getMoviesFailed,
    getMoviesSuccess,
    getMoviesStart,
    deleteMoviesStart,
    deleteMoviesSuccess,
    deleteMoviesFailed
    } from './MovieAction';

// get All Movies
export const getMovies = async ( dispatch ) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get("/movie", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch(err) {
        dispatch(getMoviesFailed());
    }
};

// Delete Movies 
export const deleteMovies = async ( id, dispatch ) => {
    dispatch(deleteMoviesStart());
    try{
        await axios.delete("/movie/" + id, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(deleteMoviesSuccess(id));
    } catch(err) {
        dispatch(deleteMoviesFailed());
    }
};


