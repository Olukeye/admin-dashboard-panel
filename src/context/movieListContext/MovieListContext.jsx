import { createContext, useReducer} from 'react';
import MovieListReducer from './MovieListReducer';

const INITIAL_STATE= {
    lists:[],
    isFetching: false, 
    error: false,
};
export const MovieListContext = createContext(INITIAL_STATE);

export const MovieListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieListReducer, INITIAL_STATE);

 return (
     <MovieListContext.Provider value={{
         lists: state.lists,
         isFetching: state.isFetching,
         error: state.error, 
         dispatch
     }}
     >
       {children}
    </MovieListContext.Provider>
 );
};