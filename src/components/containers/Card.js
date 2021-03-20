import React from 'react';

import CardWrapper from '../presentational/Card/CardWrapper';
import CardInner from '../presentational/Card/CardInner';
import CardFrontWrapper from '../presentational/Card/CardFrontWrapper';
import CardFront from '../presentational/Card/CardFront';
import CardBack from '../presentational/Card/CardBack';

export default function Card({ face, isChosen, isMatched, onClick }) {
	return (
		<CardWrapper onClick={onClick}>
			<CardInner isChosen={isChosen}>
				<CardFrontWrapper>
					<CardFront isMatched={isMatched}>{face}</CardFront>
				</CardFrontWrapper>
				<CardBack />
			</CardInner>
		</CardWrapper>
	);
}
