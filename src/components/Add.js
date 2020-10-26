import React, {useState} from 'react'

export const Add = () => {
    const [query, setQuery] = useState("");

    const onChange = async (e) => {
        setQuery(e.target.value);
        // With async/await, my prefered way
        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`);
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        // Your way fixed
        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
        //     .then((res) => {
        //         // You were missing the return here so the next .then receuved nothing
        //       return res.json()
        //   }).then((data) =>{
        //       console.log(data);
        //   });
    }
    return (
			<div className='add-page'>
				<div className='container'>
					<div className='add-content'>
						<div className='input-wrapper'>
                        <form onSubmit={e => { e.preventDefault(); }}>
								<input
									type='text'
									placeholder='Search for a movie'
									value={query}
									onChange={(event) => onChange(event)}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
}
