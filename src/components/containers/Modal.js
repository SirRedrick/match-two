import React from 'react';
import Heading from '../presentational/Heading';
import ModalWrapper from '../presentational/Modal/ModalWrapper';
import ModalContainer from '../presentational/Modal/ModalContainer';

export default function Modal() {
	return (
		<ModalWrapper>
			<ModalContainer>
				<Heading>You Win!</Heading>
			</ModalContainer>
		</ModalWrapper>
	);
}
