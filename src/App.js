import { useEffect, useState} from "react";
import './App.css';
import SeachIcon from './search.svg';
import MovieCard from "./MovieCard";

//dd7b5838
const API_URL = 'https://www.omdbapi.com?apikey=dd7b5838'

const movie1 = {
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
      }
const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        console.log(data.Search);
       setMovies(data.Search);
    } 
    useEffect(() => {
        searchMovies('action');
       

    }, []);


    return (
      <div className="app">
           <h1>MovieLand</h1> 

           <div className="search">
            <input id="searcval"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            
            <img src={SeachIcon} alt="search"
            onClick={() => {
                const final_search = searchTerm;
                searchMovies(final_search)
            console.log({searchTerm, searchMovies});}
            }/>
           </div>
            {   movies?.length > 0 ? ( 
                <div className="container">
                {movies.map((movie, imdbID) => (
                    <MovieCard movie={movie} key={imdbID}/>
                ))}

                
           </div>) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
           )
            }
          
      </div>
    )
}

export default App;