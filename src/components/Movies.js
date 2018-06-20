import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
<<<<<<< HEAD
    <h1>Movies Page</h1>
=======
>>>>>>> fc4bcb040c42e4a94bc331be4672cfa984ba077c
    	{
    		movies.map(
    			(movie,i) =>
    			<div>
    				{movie.title}
<<<<<<< HEAD
            {movie.time}
=======
>>>>>>> fc4bcb040c42e4a94bc331be4672cfa984ba077c
    				<ul>
    					{
    						movie.genres.map(
    							(each,i) => <li key={i}>{each}</li>
    						)
    					}
    				</ul>
    			</div>
    			)
    	}
    </div>
  );
};

export default Movies;
