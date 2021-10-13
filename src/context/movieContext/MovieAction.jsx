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

    // create movie
    export const createMovieStart = () => ({
        type: "CREATE_MOVIE_START",
    });

    export const createMovieSuccess = (movie) => ({
        type: "CREATE_MOVIE_SUCCESS",
        payload: movie,
    });

    export const createMovieFailed = () => ({
        type: "CREATE_MOVIE_FAILED",
    });

    // Delete movies hook
    export const deleteMoviesStart = () => ({
        type: "DELETE_MOVIES_START",
    });

    export const deleteMoviesSuccess = (id) => ({
        type: "DELETE_MOVIES_SUCCESS",
        payload: id,
    });

    export const deleteMoviesFailed = () => ({
        type: "DELETE_MOVIES_FAILED",
    });

    // 