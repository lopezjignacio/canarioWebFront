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
				<p>El deporte más popular del país se practica desde sus inicios. Durante años se fomentó la deportividad y el espíritu de equipo en la juventud que se acerca a practicar fútbol en Los Álamos.</p>
				<p>Actualmente, se desempeña en la Liga ADIAB, compitiendo los niños en las categorías masculinas de 6 a 13 años.</p>
			</div>
		</main>
		);
}

export default FutbolPage;