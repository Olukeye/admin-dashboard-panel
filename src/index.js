import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { MovieListContextProvider } from './context/movieListContext/MovieListContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
     <MovieContextProvider>  
       <MovieListContextProvider>
      <App />
      </MovieListContextProvider>
     </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


