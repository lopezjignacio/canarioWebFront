import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) =>{
	return(
		<header>
			<div>
				<img src="images/escudo.jpg" width="100" alt="Escudo" />
				<h1>Sociedad de Fomento Los Álamos</h1>
			</div>
		</header>
	);
}

export default Header;