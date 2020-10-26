import React, {useState} from 'react'

export const Add = () => {
    const [query, setQuery] = useState("");

    const onChange = (e) =>{
        e.preventDefault();
        console.log(e)
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
          )
          .then((res) =>{
              res.json()
          }).then( (data) =>{
              console.log(data)
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
                </div>
            </div>
        </div>
    )
}
