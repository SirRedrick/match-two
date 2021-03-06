import React from 'react';
import styled from 'styled-components';

function Card({ face, isChosen, onClick }) {
	return (
		<Container onClick={onClick}>
			<InnerCard isChosen={isChosen}>
				<FrontWrapper>
					<CardFront>{face}</CardFront>
				</FrontWrapper>
				<CardBack />
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
	perspective: 600px;
	font-size: 4.5rem;
`;

const InnerCard = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
	border-radius: 9px;
	position: relative;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	transform: ${(props) => (props.isChosen ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const Face = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 9px;
	backface-visibility: hidden;
`;

const FrontWrapper = styled(Face)`
	padding: 5px;
	background: linear-gradient(45deg, #3316f2, #ab05f2);
	transform: rotateY(180deg);
`;

const CardFront = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 7px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardBack = styled(Face)`
	border: 5px solid #fff;
	background: linear-gradient(45deg, #3316f2, #ab05f2);
`;
