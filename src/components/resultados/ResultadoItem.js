import React from 'react';

const ResultadoItem = (props) => {
	const { sport, category, match, field, home, homeP, away, awayP, imagen } = props;

	return (
		<div className="resultados">
{/*			<h1>{sport}</h1>
			<h2>Cat.: {category}</h2>
			<h2>Fecha: {match}</h2>
			<h2>Cancha: {field}</h2>
			<h3>{home}</h3>
			<h4>{homeP}</h4>
			<h3>{away}</h3>
			<h4>{awayP}</h4>
			<img src={imagen} alt="" />
			<div dangerouslySetInnerHTML={{ __html: field }} />
			<hr />
*/}
			<table class="table">
				<thead>
					<tr class="table-dark">
						<th scope="col">#</th>
						<th scope="col">Deporte</th>
						<th scope="col">Categoría</th>
						<th scope="col">Fecha</th>
						<th scope="col">Cancha</th>
						<th scope="col">Local</th>
						<th scope="col">Puntos</th>
						<th scope="col">Visitante</th>
						<th scope="col">Puntos</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row"></td>
						<td>{sport}</td>
						<td>{category}</td>
						<td>{match}</td>
						<td>{field}</td>
						<td>{home}</td>
						<td>{homeP}</td>
						<td>{away}</td>
						<td>{awayP}</td>
						<td> <img className="imgt" src={imagen} alt="" /></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ResultadoItem;