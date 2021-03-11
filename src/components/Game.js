import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ResetButton from './ResetButton';
import Timer from './Timer';
import animals from '../data/animals';

export default function Game() {
	const [deck, setDeck] = useState({
		pair: [],
		cards: initCards(),
		toFlip: false,
	});

	function initCards() {
		const faces = [...animals];
		const cards = [];

		for (let i = 0; i < 8; i++) {
			const index = Math.floor(getRandomArbitrary(0, faces.length));
			const face = faces.splice(index, 1)[0];
			const card = {
				face,
				isChosen: false,
				isMatched: null,
			};

			cards.push(card, card);
			faces.splice(index, 1);
		}

		shuffle(cards);
		return cards;
	}

	function handleClick(index) {
		const tempCards = [...deck.cards];
		const card = { ...deck.cards[index] };
		card.isChosen = !card.isChosen;
		tempCards[index] = card;

		if (deck.toFlip) {
			const [first, second] = deck.pair;
			tempCards[first].isChosen = !tempCards[first].isChosen;
			tempCards[second].isChosen = !tempCards[second].isChosen;
			tempCards[first].isMatched = null;
			tempCards[second].isMatched = null;

			const tempPair = [];
			tempPair.push(index);

			setDeck({
				pair: tempPair,
				cards: tempCards,
				toFlip: false,
			});
		} else {
			const tempPair = [...deck.pair];
			tempPair.push(index);
			if (tempPair.length > 1) {
				const [first, second] = tempPair;
				if (tempCards[first].face !== tempCards[second].face) {
					tempCards[first].isMatched = false;
					tempCards[second].isMatched = false;

					setDeck({
						pair: tempPair,
						cards: tempCards,
						toFlip: true,
					});
					return;
				}
			}

			setDeck({
				pair: tempPair,
				cards: tempCards,
				toFlip: deck.toFlip,
			});
		}
	}

	function reset() {
		setDeck({
			pair: [],
			cards: initCards(),
		});
	}

	return (
		<Container>
			<Grid>
				{deck.cards.map(({ face, isChosen, isMatched }, index) => (
					<Card key={index} face={face} isChosen={isChosen} isMatched={isMatched} onClick={() => handleClick(index)} />
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
