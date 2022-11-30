import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) =>{
	return(
		<main className="holder">
			<div className="box1">
				<div className="frente">
					<img className="imgfrente" src="images/frente.jpg" alt="Frente" />
				</div>
				<div className="intro">
					<h2 className="bienvenidos">¡BIENVENIDOS!</h2>
					<p>El Club Los Álamos es una sociedad de fomento fundada en el año 1954. El mismo junta jóvenes, niños y adultos formando una gran familia. Compartiendo cultura y deporte al pueblo y el firme propósito de quitar a los chicos de la calle, el club crece día a día gracias al esfuerzo de grandes personas.</p>
					<p>En el club se desarrollan distintas actividades deportivas: fútbol, patín, básquet, futsal, gimnasia deportiva. También actividades recreativas culturales: zumba, salsa, talleres de costura y tejido. Además, para seguir creciendo con la comunidad, se imparten clases para adultos de primaria y secundaria.</p>
				</div>
			</div>
			<div className="comentarios">
				<h2>Testimonios</h2>
					<div className="comentario1">
						<span className="cita">¡Vamos Canario de mi vida!</span><br />
						<span className="autor">Carlos Ayala - profesor de básquet</span>
					</div>					
					<div className="comentario2">
						<span className="cita">Aquí creció mi papá, yo y ahora mis hijos y nunca faltó el amor y el esfuerzo de todos.</span><br />
						<span className="autor">Laura</span>
					</div>
					<div className="comentario3">
						<span className="cita">En este club conocí a la mujer de mi vida jugando al voley</span><br />
						<span className="autor">Sebastián</span>
					</div>
					<div className="comentario4">
						<span className="cita">En ningún lado mi hija es más feliz que jugando al básquet en el club con sus amigos</span><br />
						<span className="autor">Eliana</span>
					</div>
			</div>
		</main>
	);
}

export default HomePage;