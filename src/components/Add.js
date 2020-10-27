import React, {useState} from 'react'
import {ResultCard} from './ResultCard'

export const Add = () => {
    const [query, setQuery] = useState("");
    const [result, setResults] = useState([]);
    const onChange = (e) =>{
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
          )
          .then((res) =>{
              return res.json()
          }).then( (data) =>{
              if(!data.errors){
                  setResults(data.results);
              }
              else{
                  setResults([]);
              }
          });
    }
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type='text' 
                            placeholder="Search for a movie" 
                            value ={query}
                            onChange={(event) => onChange(event)}
                        />
                    </div>
                    {result.length > 0 && (
                            <ul className="results">
                                {result.map((movie) => (
                                    <li key={movie.id}>
                                        <ResultCard movie ={movie} />
                                    </li>
                                ))}
                            </ul>
                        )}
                </div>
            </div>
        </div>
    )
}
