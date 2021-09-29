const MovieReducer = (state, action) => {
    switch (action.type) {
        case "START_MOVIES":
            return {
               movies: [],
                isFetching: true,
                error: false,
            };
            case "MOVIES_SUCCESS":
            return {
               movies: action.payload,
                isFetching: false,
                error: false,
            };
            case "MOVIES_FAILED":
            return {
               movies: [],
                isFetching: false,
                error: true,
            };
            default :
            return {...state}
    }
};

export default MovieReducer;