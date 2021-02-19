import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const animals = [
	'🐱',
	'🐵',
	'🐶',
	'🦊',
	'🦁',
	'🐯',
	'🐮',
	'🐷',
	'🐭',
	'🐹',
	'🐰',
	'🐻',
	'🐨',
	'🐼',
	'🐸',
	'🐲',
	'🐙',
	'🦋',
	'🦀',
	'🦑',
];

function Game() {
	const [cards, setCards] = useState(initCards());

	return (
		<div>
			{cards.map((card, index) => (
				<Card key={index} card={card} />
			))}
		</div>
	);
}

const Grid = styled.div;

function initCards() {
	const animalsCopy = [...animals];
	const cards = [];
	for (let i = 0; i < 8; i++) {
		const index = Math.floor(getRandomArbitrary(0, animalsCopy.length));
		const animal = animalsCopy.splice(index, 1)[0];
		cards.push(animal, animal);
		animalsCopy.splice(index, 1);
	}
	shuffle(cards);
	return cards;
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
