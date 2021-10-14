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
    createMovieSuccess,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailed
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

// update movie api
export const updateMovies = async ( movie, dispatch ) => {
    dispatch(updateMovieStart());
    try{
        const res = await axios.put("/movie", movie, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(updateMovieSuccess(res.data));
    } catch(err) {
        dispatch(updateMovieFailed());
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


