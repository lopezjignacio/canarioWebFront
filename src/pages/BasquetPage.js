import React from 'react';
import '../styles/components/pages/BasquetPage.css'

const BasquetPage = (props) =>{
	return(
		<main className="main2">
			<div className="basquettitle">
				<h1>CANARIO BÁSQUET</h1>
			</div>
			<div className="basquetimg">
				<img className="imgbasquet" src="images/basquet.jpg" /*width="100"*/ alt="Basquet" />
			</div>
			<div className="basquetintro">
				<p>Desde 1976, la Sociedad de Fomento Los Álamos prepara y educa a los niños y jóvenes en básquet. Desde hace más de 40 años presenta equipos en las ligas regionales, con el orgullo de pertenecer a la familia canaria.</p>
				<p>Actualmente, se desempeña en la Liga del Sur, en modalidades femenina, masculina y mixta, compitiendo en las siguientes categorías:</p>
				<ul>
					<li>Pre-mini</li>
					<li>Mini</li>
					<li>U-13</li>
					<li>U-15</li>
					<li>U-17</li>
					<li>U-19</li>
					<li>Primera División</li>
					<li>Maxi Básquet (+35 años)</li>
				</ul>
			</div>
		</main>
		);
}

export default BasquetPage;