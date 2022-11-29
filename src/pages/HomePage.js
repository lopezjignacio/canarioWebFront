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
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<div className="comentarios">
				<h2>Testimonios</h2>
					<div className="comentario1">
						<span className="cita">Simplemente excelente</span>
						<span className="autor">Juan Gómez - zapatos.com</span>
					</div>					
					<div className="comentario2">
						<span className="cita">Simplemente excelente</span>
						<span className="autor">Juan Gómez - zapatos.com</span>
					</div>
					<div className="comentario3">
						<span className="cita">Simplemente excelente</span>
						<span className="autor">Juan Gómez - zapatos.com</span>
					</div>
					<div className="comentario4">
						<span className="cita">Simplemente excelente</span>
						<span className="autor">Juan Gómez - zapatos.com</span>
					</div>
			</div>
		</main>
	);
}

export default HomePage;