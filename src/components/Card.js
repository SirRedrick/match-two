import React from 'react';
import styled from 'styled-components';

function Card({ face, isChosen, onClick }) {
	return (
		<Container onClick={onClick}>
			<InnerCard>
				<CardFront>{face}</CardFront>
			</InnerCard>
		</Container>
	);
}

export default Card;

// Styles

const Container = styled.div`
	background-color: transparent;
	width: 130px;
	height: 130px;

	font-size: 4.5rem;
`;

const InnerCard = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
	border-radius: 9px;
`;

const CardFront = styled.div`
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
