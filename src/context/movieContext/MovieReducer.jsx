const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_START_MOVIES":
            return {
               movie: [],
                isFetching: true,
                error: false,
            };
            case "GET_MOVIES_SUCCESS":
            return {
               movie: action.payload,
                isFetching: false,
                error: false,
            };
            case "GET_MOVIES_FAILED":
            return {
               movie: [],
                isFetching: false,
                error: true,
            };
            // Delete
            case "DELETE_START_MOVIES":
            return {
               ...state,
                isFetching: true,
                error: false,
            };
            case "DELETE_MOVIES_SUCCESS":
            return {
               movie: state.movie.filter((movie) => movie._id !== action.payload),
                isFetching: false,
                error: false,
            };
            case "DELETE_MOVIES_FAILED":
            return {
               ...state,
                isFetching: false,
                error: true,
            };
            default :
            return {...state}
    }
};

export default MovieReducer;