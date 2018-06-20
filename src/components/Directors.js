import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
<<<<<<< HEAD
    <h1>Directors Page</h1>
=======
>>>>>>> fc4bcb040c42e4a94bc331be4672cfa984ba077c
      {
      	directors.map(
    			(director,i) =>
    			<div key={i}>
    				{director.name}
    				<ul>
    					{
    						director.movies.map(
    							(each,i) => <li key={i}>{each}</li>
    						)
    					}
    				</ul>
    			</div>
    			)
      }
    </div>
  );
}

export default Directors
