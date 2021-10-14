const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LIST_START":
            return {
              lists: [],
                isFetching: true,
                error: false,
            };
            case "GET_LIST_SUCCESS":
            return {
              lists: action.payload,
                isFetching: false,
                error: false,
            };
            case "GET_LIST_FAILED":
            return {
              lists: [],
                isFetching: false,
                error: true,
            };
            // // create movie
            // case "CREATE_MOVIE_START":
            //     return {
            //        ...state,
            //         isFetching: true,
            //         error: false,
            //     };
            //     case "CREATE_MOVIE_SUCCESS":
            //     return {
            //        movie:[...state.movie, action.payload ],
            //         isFetching: false,
            //         error: false,
            //     };
            //     case "CREATE_MOVIE_FAILED":
            //     return {
            //         ...state,
            //         isFetching: false,
            //         error: true,
            //     };
            //     // Update movie
            //     case "UPDATE_MOVIE_START":
            //     return {
            //        ...state,
            //         isFetching: true,
            //         error: false,
            //     };
            //     case "UPDATE_MOVIE_SUCCESS":
            //     return {
            //        movie: state.movie.map(
            //            (movie) => movie._id === action.payload._id && action.payload
            //        ),
            //         isFetching: false,
            //         error: false,
            //     };
            //     case "UPDATE_MOVIE_FAILED":
            //     return {
            //         ...state,
            //         isFetching: false,
            //         error: true,
            //     };

            // // Delete
            case "DELETE_LIST_START":
            return {
               ...state,
                isFetching: true,
                error: false,
            };
            case "DELETE_LIST_SUCCESS":
            return {
               lists: state.lists.filter((list) => list._id !== action.payload),
                isFetching: false,
                error: false,
            };
            case "DELETE_LIST_FAILED":
            return {
               ...state,
                isFetching: false,
                error: true,
            };
            default :
            return {...state}
    }
};

export default ListReducer;