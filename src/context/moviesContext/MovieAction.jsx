export const moviesStart = () => ({
    type: "START_START",
});

export const moviesSuccess = (movies) => ({
    type: "MOVIES_SUCCESS",
    payload: movies,
});

export const MovieFailed = () => ({
    type: "MOVIES_FAILED",
});