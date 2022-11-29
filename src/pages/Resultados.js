import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultadoItem from '../components/resultados/ResultadoItem';

const Resultados = (props) =>{

	const [loading, setLoading] = useState(false);
	const [resultados, setResultados] = useState([]);

	useEffect(() => {
		const cargarResultados = async () => {
			setLoading(true);
			const response = await axios.get('http://localhost:3000/api/resultados');
			setResultados(response.data);
			setLoading(false);
		};

		cargarResultados();
	}, []);

	return(
		<main className="main3">
			<h2>Resultados</h2>
			{loading ? (
				<p>Cargando...</p>
				):(
					resultados.map(item => <ResultadoItem
						key={item.id}
						sport={item.Deporte}
						category={item.Categoria}
						match={item.Fecha}
						field={item.Cancha}
						home={item.Local}
						homeP={item.PuntosL}
						away={item.Visitante}
						awayP={item.PuntosV}
						imagen={item.imagen}
						/>)
				)}
		</main>
		);
}

export default Resultados;