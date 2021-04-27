import React from 'react';
import PropTypes from 'prop-types';
import TryAgainButton from './ResetButton';
import Heading from '../presentational/Heading';
import ModalWrapper from '../presentational/Modal/ModalWrapper';
import ModalContainer from '../presentational/Modal/ModalContainer';

const Modal = ({ onClick }) => (
  <ModalWrapper>
    <ModalContainer>
      <Heading>You Win!</Heading>
      <TryAgainButton onClick={onClick} />
    </ModalContainer>
  </ModalWrapper>
);

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Modal;
