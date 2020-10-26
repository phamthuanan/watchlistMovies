import React, {useState} from 'react'

export const Add = () => {
    const [query, setQuery] = useState("");

    const onChange = (e) =>{
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=658b43d2ae6cc69cf4c771169daf79b4&language=en-US&page=1&include_adult=false&query=${e.target.value}`
          )
          .then(res =>{
              res.json()
          }).then( data =>{
              console.log(data)
          })
    }
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type='text' 
                            placeholder="Search for a movie" 
                            value ={query}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
