import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ResetButton from './ResetButton';
import animals from '../data/animals';

function Game() {
	const [cards, setCards] = useState(initCards());

	function initCards() {
		const faces = [...animals];
		const cards = [];

		for (let i = 0; i < 8; i++) {
			const index = Math.floor(getRandomArbitrary(0, faces.length));
			const face = faces.splice(index, 1)[0];
			const card = {
				face,
				isChosen: false,
			};

			cards.push(card, card);
			faces.splice(index, 1);
		}

		shuffle(cards);

		return cards;
	}

	function reset() {
		setCards(initCards);
	}

	function handleClick(index) {
		console.log(index);
		const tempCards = [...cards];
		const card = { ...cards[index] };
		card.isChosen = !card.isChosen;
		tempCards[index] = card;
		setCards(tempCards);
	}

	return (
		<Container>
			<Grid>
				{cards.map(({ face, isChosen }, index) => (
					<Card key={index} face={face} isChosen={isChosen} onClick={() => handleClick(index)} />
				))}
			</Grid>
			<ResetButton onClick={reset} />
		</Container>
	);
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function shuffle(array) {
	let m = array.length;
	let temp;
	let index;

	while (m) {
		index = Math.floor(Math.random() * m--);

		temp = array[m];
		array[m] = array[index];
		array[index] = temp;
	}
}

export default Game;

// Styles

const Container = styled.div`
	text-align: center;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 130px);
	grid-template-rows: repeat(3, 130px);
	gap: 25px;

	width: max-content;
	margin: 40px auto 0 auto;
`;
