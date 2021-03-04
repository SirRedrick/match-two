import React from 'react';

function Card({ face, isChosen, onClick }) {
	return (
		<div className="card" style={isChosen ? { background: 'green' } : {}} onClick={onClick}>
			{face}
		</div>
	);
}

export default Card;
