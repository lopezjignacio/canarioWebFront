import React from 'react';

const ResultadoItem = (props) => {
	const { sport, category, match, field, home, homeP, away, awayP, imagen } = props;

	return (
		<div className="resultados">
			<h1>{sport}</h1>
			<h2>{category}</h2>
			<h2>{match}</h2>
			<h2>{field}</h2>
			<h3>{home}</h3>
			<h4>{homeP}</h4>
			<h3>{away}</h3>
			<h4>{awayP}</h4>
			<img src={imagen} alt="" />
			<div dangerouslySetInnerHTML={{ __html: field }} />
			<hr />
		</div>
	);
}

export default ResultadoItem;