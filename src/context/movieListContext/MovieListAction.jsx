    // Get all List 
    export const getListStart = () => ({
        type: "GET_LIST_START",
    });

    export const getListSuccess = (lists) => ({
        type: "GET_LIST_SUCCESS",
        payload: lists,
    });

    export const getListFailed = () => ({
        type: "GET_LIST_FAILED",
    });

    // // create movie
    // export const createListtart = () => ({
    //     type: "CREATE_MOVIE_START",
    // });

    // export const createListuccess = (movie) => ({
    //     type: "CREATE_MOVIE_SUCCESS",
    //     payload: movie,
    // });

    // export const createMovieFailed = () => ({
    //     type: "CREATE_MOVIE_FAILED",
    // });

    // // Update movie
    // export const updateListtart = () => ({
    //     type: "UPDATEE_MOVIE_START",
    // });

    // export const updateListuccess = (movie) => ({
    //     type: "UPDATEE_MOVIE_SUCCESS",
    //     payload: movie,
    // });

    // export const updateMovieFailed = () => ({
    //     type: "UPDATEE_MOVIE_FAILED",
    // });

    // Delete List hook
    export const deleteListStart = () => ({
        type: "DELETE_LIST_START",
    });

    export const deleteListSuccess = (id) => ({
        type: "DELETE_LIST_SUCCESS",
        payload: id,
    });

    export const deleteListFailed = () => ({
        type: "DELETE_LIST_FAILED",
    });

    // // 