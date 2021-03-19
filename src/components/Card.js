import React from 'react';

import CardContainer from '../styled/Card/CardContainer';
import InnerCard from '../styled/Card/InnerCard';
import FrontWrapper from '../styled/Card/FrontWrapper';
import CardFront from '../styled/Card/CardFront';
import CardBack from '../styled/Card/CardBack';

export default function Card({ face, isChosen, isMatched, onClick }) {
	return (
		<CardContainer onClick={onClick}>
			<InnerCard isChosen={isChosen}>
				<FrontWrapper>
					<CardFront isMatched={isMatched}>{face}</CardFront>
				</FrontWrapper>
				<CardBack />
			</InnerCard>
		</CardContainer>
	);
}

// Styles
