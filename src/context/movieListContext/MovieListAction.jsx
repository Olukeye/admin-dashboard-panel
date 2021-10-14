    // Get all List 
    export const getListStart = () => ({
        type: "GET_List_START",
    });

    export const getListSuccess = (list) => ({
        type: "GET_List_SUCCESS",
        payload: list,
    });

    export const getListFailed = () => ({
        type: "GET_List_FAILED",
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

    // // Delete List hook
    // export const deleteListStart = () => ({
    //     type: "DELETE_List_START",
    // });

    // export const deleteListSuccess = (id) => ({
    //     type: "DELETE_List_SUCCESS",
    //     payload: id,
    // });

    // export const deleteListFailed = () => ({
    //     type: "DELETE_List_FAILED",
    // });

    // // 