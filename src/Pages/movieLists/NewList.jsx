import React, { useState, useContext, useEffect } from 'react';
import './newlist.css';
import { getMovies } from '../../context/movieContext/movieApiCalls';
import { MovieListContext } from '../../context/movieListContext/MovieListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { createList } from '../../context/movieListContext/MovieListApiCalls';
import { useHistory } from 'react-router';


const NewList = () => {
    const [ list , setList ] = useState(null);
    const history = useHistory()

    // dispatch context
    const {dispatch} = useContext(MovieListContext);
    const {movie, dispatch:dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);
      
    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value});
    }
    //To  handle selected options of movie
    const handleSelect = (e) => {
       let value = Array.from(e.target.selectedOptions, (option) => option.value);
       setList({ ...list, [e.target.name]: value});
    }
   
    // To hanlde the submit butto n
    const handleSubmit = (e) => { 
        e.preventDefault();
        createList(list, dispatch)
        history.push("/list")
      }

     return (
        <div className="newlist">
             <h1 className="newlistTitle">New List</h1>
            <form className="newlistForm">
                <div className="formLeft">
                <div className="newlistItem">
                    <label>Title</label>
                    <input type="text" placeholder="Popular Movies" onChange={handleChange}  name="title" />
                </div>
                <div className="newlistItem">
                    <label>Genre</label>
                    <input type="text" placeholder="action" onChange={handleChange}  name="genre" />
                </div>
                <div className="newlistItem">
                    <label>Type</label>
                    <select  onChange={handleChange} name="type" id="isSeries">
                    <option>Type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                </div>
                <div className="newlistItem">
                    <label>Content</label>
                    <select multiple name="content" onChange={handleSelect} style={{height:"275px"}} >
                       {movie.map((movie) => (
                           <option value={movie._id} key={movie._id} >{movie.title}</option>
                       ))}
                    </select>
                </div>
                <div>
                 <button className="newlistBtn" onClick={handleSubmit}>Create</button>  
                </div>
            </form>
        </div>
    )
}
export default NewList;
