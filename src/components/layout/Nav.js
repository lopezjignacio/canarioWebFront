import React from 'react';
/*import {Link} from "react-router-dom";*/
import {NavLink} from 'react-router-dom';

import '../../styles/components/layout/Nav.css';

const Nav = (props) =>{
	return (
		<nav>
			<div>
				<ul>
					<li><NavLink activeClassName="activo" exact to="/">Home</	NavLink></li>
					<li><NavLink activeClassName="activo" exact to="/BasquetPage">Básquet</NavLink></li>
					<li><NavLink activeClassName="activo" exact to="/FutbolPage">Fútbol</NavLink></li>
					<li><NavLink activeClassName="activo" exact to="/Resultados">Resultados</NavLink></li>
					<li><NavLink activeClassName="activo" exact to="/ContactoPage">Contacto</NavLink></li>
				</ul>
			</div>
		</nav>

	);
}

export default Nav;