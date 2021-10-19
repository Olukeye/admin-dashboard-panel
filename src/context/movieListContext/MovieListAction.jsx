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

    // // create ListofMovie
    export const createListStart = () => ({
        type: "CREATE_MOVIE_START",
    });

    export const createListSuccess = (list) => ({
        type: "CREATE_MOVIE_SUCCESS",
        payload: list,
    });

    export const createListFailed = () => ({
        type: "CREATE_MOVIE_FAILED",
    });

    // // Update movie
    export const updateListStart = () => ({
        type: "UPDATEE_MOVIE_START",
    });

    export const updateListSuccess = (list) => ({
        type: "UPDATEE_MOVIE_SUCCESS",
        payload: list,
    });

    export const updateListFailed = () => ({
        type: "UPDATEE_MOVIE_FAILED",
    });

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