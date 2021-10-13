import axios from "axios";
import  {
    getMoviesFailed,
    getMoviesSuccess,
    getMoviesStart,
    deleteMoviesStart,
    deleteMoviesSuccess,
    deleteMoviesFailed,
    createMovieStart,
    createMovieFailed,
    createMovieSuccess
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

// create movie  
export const createMovies = async ( movie, dispatch ) => {
    dispatch(createMovieStart());
    try{
        const res = await axios.post("/movie", movie, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch(err) {
        dispatch(createMovieFailed());
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


