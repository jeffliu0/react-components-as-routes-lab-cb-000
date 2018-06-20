import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
<<<<<<< HEAD
      <h1>Actors Page</h1>
=======
>>>>>>> fc4bcb040c42e4a94bc331be4672cfa984ba077c
      {
      	actors.map(
    			(actor,i) =>
    			<div key={i}>
    				{actor.name}
    				<ul>
    					{
    						actor.movies.map(
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

export default Actors;
