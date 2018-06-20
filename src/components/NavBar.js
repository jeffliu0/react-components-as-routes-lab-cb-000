import React from 'react';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () =>
<<<<<<< HEAD
	<div className='navbar'>
=======
	<div>
>>>>>>> fc4bcb040c42e4a94bc331be4672cfa984ba077c
		<NavLink to="/" exact style={link}
		activeStyle={{background: 'darkblue'}}>Home</NavLink>
		<NavLink to="/movies" exact style={link}
		activeStyle={{background: 'darkblue'}}>Movies</NavLink>
		<NavLink to="/directors" exact style={link}
		activeStyle={{background: 'darkblue'}}>Directors</NavLink>
		<NavLink to="/actors" exact style={link}
		activeStyle={{background: 'darkblue'}}>Actors</NavLink>
	</div>

export default NavBar;
