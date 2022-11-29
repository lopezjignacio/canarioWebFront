import React from 'react';
import '../styles/components/pages/FutbolPage.css'

const FutbolPage = (props) =>{
	return(
		<main className="main2">
			<div className="futboltitle">
				<h1>CANARIO FÚTBOL</h1>
			</div>
			<div className="futbolimg">
				<img className="imgfutbol" src="images/futbol.jpg" width="100" alt="Fùtbol" />
			</div>
			<div className="futbolintro">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</main>
		);
}

export default FutbolPage;