import axios from "axios";
import  { getMoviesFailed, getMoviesSuccess, getMoviesStart} from './MovieAction';

export const getMovies = async ( dispatch ) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get("/movie", {
            headers : { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch(err) {
        dispatch(getMoviesFailed());
    }
};

