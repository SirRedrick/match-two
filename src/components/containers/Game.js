import React, { useState, useEffect } from 'react';

import Card from './Card';
import Modal from './Modal';

import Container from '../presentational/Container';
import Heading from '../presentational/Heading';
import Grid from '../presentational/Grid';

import shuffle from '../../utils/shuffle';
import animals from '../../data/animals';

export default function Game() {
	const [deck, setDeck] = useState({
		pair: [],
		cards: initCards(),
		toFlip: false,
	});
	const [count, setCount] = useState(8);
	const [win, setWin] = useState(false);

	useEffect(() => {
		if (count) return;
		setWin(true);
	}, [count]);

	function initCards() {
		const faces = [...animals];

		shuffle(faces);
		const cards = faces.splice(0, 8).flatMap((face) => {
			const card = {
				face,
				isChosen: false,
				isMatched: null,
			};

			return [card, card];
		});

		shuffle(cards);
		return cards;
	}

	function handleClick(index) {
		if (deck.cards[index].isMatched !== null || deck.pair[0] === index) return;

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
				} else {
					tempCards[first].isMatched = true;
					tempCards[second].isMatched = true;

					setDeck({
						pair: [],
						cards: tempCards,
						toFlip: false,
					});
					setCount(count - 1);
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
			toFlip: false,
		});
		setCount(8);
		setWin(false);
	}

	return (
		<Container>
			<Heading>Match Two!</Heading>
			<Grid>
				{deck.cards.map(({ face, isChosen, isMatched }, index) => (
					<Card key={index} face={face} isChosen={isChosen} isMatched={isMatched} onClick={() => handleClick(index)} />
				))}
			</Grid>
			{win ? <Modal onClick={() => reset()} /> : null}
		</Container>
	);
}
