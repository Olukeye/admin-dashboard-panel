    export const getMoviesStart = () => ({
        type: "GET_MOVIES_START",
    });

    export const getMoviesSuccess = (movie) => ({
        type: "GET_MOVIES_SUCCESS",
        payload: movie,
    });

    export const getMoviesFailed = () => ({
        type: "GET_MOVIES_FAILED",
    });