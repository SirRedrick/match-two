import React from 'react';

import ResetButton from './ResetButton';

import Heading from '../presentational/Heading';
import ModalWrapper from '../presentational/Modal/ModalWrapper';
import ModalContainer from '../presentational/Modal/ModalContainer';

export default function Modal({ onClick }) {
	return (
		<ModalWrapper>
			<ModalContainer>
				<Heading>You Win!</Heading>
				<ResetButton onClick={onClick} />
			</ModalContainer>
		</ModalWrapper>
	);
}
